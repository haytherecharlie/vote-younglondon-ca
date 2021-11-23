import React from 'react'
import { navigate } from '@reach/router'
import { castBallot } from 'api/routes'
import useValidateForm from 'ui/hooks/useValidateFormReducer'
import Checkbox from 'ui/atoms/Checkbox'
import * as S from './Ballot.style'

const Ballot = () => {
  const [{ first, last, gender, age, email, postal, vote, refTopic, consent, referendum }, update] = useValidateForm()

  const candidates = {
    '01': 'Heba Mohamed',
    '02': 'Brehleen Virk',
    '03': 'Amy Jing',
    '04': 'Christabel Thevar',
    '05': 'Maham Shaikh',
    '06': 'Sophia Yuan',
    '07': 'Leon Yang',
    '08': 'Nova Tailanova'
  }

  const referendumTopics = [
    'substance use and addictions',
    'community safety',
    'covid-19',
    'employment',
    'environment & climate change',
    'discrimination',
    'affordability & financial insecurity',
    'homelessness & housing',
    'mental health',
    'transit',
    'youth spaces',
    'other'
  ]

  const submitForm = async (e = null) => {
    if (e) e.preventDefault()
    if (
      [first, last, gender, age, email, vote, refTopic, consent, referendum].some(
        o => o.value !== '' && o.valid === 'valid'
      )
    ) {
      await castBallot(email.value.toLowerCase(), {
        age: age.value,
        emailConsent: consent.value,
        email: email.value.toLowerCase(),
        first: first.value,
        gender: gender.value,
        last: last.value,
        postal: postal.value,
        refTopic: referendumTopics[refTopic.value],
        referendum: referendum.value,
        verified: false,
        vote: candidates[vote.value],
        voteId: vote.value
      })
      return navigate('/thanks')
    }
    return update({ type: 'find-errors' })
  }

  const handleEnter = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const form = e.target.form
      const index = Array.prototype.indexOf.call(form, e.target)
      return index < form.length - 1 ? form.elements[index + 1].focus() : submitForm()
    }
  }

  return (
    <S.Ballot>
      <S.Logo src="/images/lyac.png" alt="LYAC logo" />
      <S.Sheet>
        <S.Title>{`London Youth Advisory Council 2021 Ballot`}</S.Title>
        <S.SubHeading>Personal Information</S.SubHeading>
        <div style={{ display: 'inline-block' }}>
          <S.CopyText>
            {`Please provide accurate details - false information will invalidate your ballot. To learn more, read our `}
          </S.CopyText>
          <S.PrivacyLink href="https://younglondon.ca/privacy-policy/">Privacy Policy</S.PrivacyLink>
        </div>

        <form onKeyDown={handleEnter} onSubmit={submitForm}>
          <S.Input
            valid={first.valid}
            onKeyDown={handleEnter}
            value={first.value}
            onChange={e => update({ type: 'first', value: e.target.value })}
            placeholder="Your First Name"
            autoFocus
          />
          {first.error && <S.Error>{first.error}</S.Error>}
          <S.Input
            valid={last.valid}
            onKeyDown={handleEnter}
            value={last.value}
            onChange={e => update({ type: 'last', value: e.target.value })}
            placeholder="Your Last Name"
          />
          {last.error && <S.Error>{last.error}</S.Error>}
          <S.Input
            valid={gender.valid}
            onKeyDown={handleEnter}
            value={gender.value}
            onChange={e => update({ type: 'gender', value: e.target.value })}
            placeholder="Gender"
          />
          {gender.error && <S.Error>{gender.error}</S.Error>}
          <S.Input
            valid={age.valid}
            onKeyDown={handleEnter}
            value={age.value}
            onChange={e => update({ type: 'age', value: e.target.value })}
            placeholder="Age"
          />
          {age.error && <S.Error>{age.error}</S.Error>}
          <S.Input
            valid={postal.valid}
            onKeyDown={handleEnter}
            value={postal.value}
            onChange={e => update({ type: 'postal', value: e.target.value.toUpperCase().replace(/\s/g, '') })}
            placeholder="Postal Code"
          />
          {postal.error && <S.Error>{postal.error}</S.Error>}
          <S.Input
            valid={email.valid}
            onKeyDown={handleEnter}
            value={email.value}
            onChange={e => update({ type: 'email', value: e.target.value })}
            placeholder="Email Address"
          />
          {email.error && <S.Error>{email.error}</S.Error>}
          <S.Divider height="10px" />
          <S.SubHeading>Your Vote (One Vote Per Person)</S.SubHeading>
          <div style={{ display: 'inline-block' }}>
            <S.CopyText>To learn more about each candidate, please visit our </S.CopyText>
            <S.PrivacyLink href="https://younglondon.ca/the-council/meet-the-candidates/" target="_blank">
              Election Page
            </S.PrivacyLink>
            <br />
            <S.CopyText>
              Candidates must reach a minimum threshold of 150 votes in order to secure a spot on council.
            </S.CopyText>
            <br />
          </div>
          {Object.entries(candidates).map(([id, name]) => (
            <Checkbox
              key={id}
              id={id}
              name={name}
              vote={vote.value}
              onChange={() => update({ type: 'vote', value: id })}
            />
          ))}
          {vote.error && <S.Error>{vote.error}</S.Error>}
          <S.Divider height="5px" />
          <S.SubHeading>Referendum Question</S.SubHeading>
          <S.Text>What do you feel is the most pressing issue in your community?</S.Text>
          {referendumTopics.map((topic, id) => (
            <Checkbox
              key={id}
              id={id}
              name={topic}
              vote={refTopic.value}
              onChange={() => update({ type: 'refTopic', value: id })}
            />
          ))}
          <S.Input
            valid={referendum.valid}
            value={referendum.value}
            onChange={e => update({ type: 'referendum', value: e.target.value })}
            placeholder="Tell us more!"
          />
          {referendum.error && <S.Error>{referendum.error}</S.Error>}
          <br />
          <br />
          <input
            type="checkbox"
            value="consent"
            checked={consent.value === 'yes'}
            onChange={() => update({ type: 'consent', value: consent.value === 'yes' ? 'no' : 'yes' })}
          />
          <S.CopyText> I would like to recieve email updates from Young London</S.CopyText>
          <S.Vote
            onClick={submitForm}
            disabled={[first, last, gender, age, email, vote, referendum].some(
              o => o.value === '' && o.valid !== 'valid'
            )}>
            <S.Lock src="/images/lock.png" />
            {`Cast Your Vote`}
          </S.Vote>
        </form>
      </S.Sheet>
    </S.Ballot>
  )
}

export default Ballot
