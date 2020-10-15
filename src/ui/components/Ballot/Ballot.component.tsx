import React from 'react'
import { navigate } from '@reach/router'
import { castBallot } from 'api/routes'
import useValidateForm from 'ui/hooks/useValidateFormReducer'
import Checkbox from 'ui/atoms/Checkbox'
import * as S from './Ballot.style'

const Ballot = () => {
  const [{ first, last, gender, age, email, vote, referendum }, update] = useValidateForm()

  console.log(first)
  const candidates = {
    '01': 'Aditi Basdeo',
    '02': 'Alice Balluku',
    '03': 'Amy Jing',
    '04': 'Madeline Noftle',
    '05': 'Michelle Lim',
    '06': 'Jackson Dobbin',
    '07': 'Maddy McCarville',
    '08': 'Dylan Parks',
    '09': 'Moeez Tahir',
    '10': 'Rimsha Ashraf',
    '11': 'Sophia Yuan',
    '12': 'Abdullah Qassab',
    '13': 'Hawa Ahmed'
  }

  const submitForm = async (e = null) => {
    if (e) e.preventDefault()
    if ([first, last, gender, age, email, vote, referendum].some(o => o.value !== '' && o.valid === 'valid')) {
      await castBallot(email.value.toLowerCase(), {
        age: age.value,
        email: email.value.toLowerCase(),
        first: first.value,
        gender: gender.value,
        last: last.value,
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
        <S.Title>{`Young London 2020 Ballot`}</S.Title>
        <S.SubHeading>Personal Information</S.SubHeading>
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
            valid={email.valid}
            onKeyDown={handleEnter}
            value={email.value}
            onChange={e => update({ type: 'email', value: e.target.value })}
            placeholder="Email Address"
          />
          {email.error && <S.Error>{email.error}</S.Error>}
          <S.Divider height="10px" />
          <S.SubHeading>Your Vote (One Vote Per Person)</S.SubHeading>
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
          <S.Text>What could London do to improve transportation for youth?</S.Text>
          <S.Input
            valid={referendum.valid}
            value={referendum.value}
            onChange={e => update({ type: 'referendum', value: e.target.value })}
            placeholder="Tell us what you think!"
          />
          {referendum.error && <S.Error>{referendum.error}</S.Error>}
          <S.Vote onClick={submitForm} disabled={[first, last, gender, age, email, vote, referendum].some(o => o.value === '' && o.valid !== 'valid')}>
            <S.Lock src="/images/lock.png" />
            Cast Your Vote
          </S.Vote>
        </form>
      </S.Sheet>
    </S.Ballot>
  )
}

export default Ballot
