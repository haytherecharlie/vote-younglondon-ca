import React from 'react'
import pathOr from 'ramda.pathor'
import { navigate } from '@reach/router'
import { useSelector } from 'react-redux'
import { castBallot } from 'api/routes'
import useValidateForm from 'ui/hooks/useValidateFormReducer'
import Checkbox from 'ui/atoms/Checkbox'
import * as S from './Ballot.style'

const Ballot = () => {
  const [{ first, last, gender, age, email, vote }, update] = useValidateForm()
  const { address, candidates, ward } = useSelector(s => pathOr({ ward: null, candidates: {} }, ['app'], s))

  const submitForm = async (e = null) => {
    if (e) e.preventDefault()
    if ([first, last, gender, age, email, vote].some(o => o.value !== '' && o.valid === 'valid')) {
      await castBallot(email.value, {
        address,
        age: age.value,
        email: email.value,
        first: first.value,
        gender: gender.value,
        last: last.value,
        vote: vote.value,
        ward
      })
      return navigate('/check-email')
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
        <S.Title>{`Ward ${ward} Ballot`}</S.Title>
        <S.SubHeading>Personal Information</S.SubHeading>
        <form onKeyDown={handleEnter} onSubmit={submitForm}>
          <S.Input
            onKeyDown={handleEnter}
            value={first.value}
            onChange={e => update({ type: 'first', value: e.target.value })}
            placeholder="Your First Name"
            autoFocus
          />
          {first.error && <S.Error>{first.error}</S.Error>}
          <S.Input
            onKeyDown={handleEnter}
            value={last.value}
            onChange={e => update({ type: 'last', value: e.target.value })}
            placeholder="Your Last Name"
          />
          {last.error && <S.Error>{last.error}</S.Error>}
          <S.Input
            onKeyDown={handleEnter}
            value={gender.value}
            onChange={e => update({ type: 'gender', value: e.target.value })}
            placeholder="Gender"
          />
          {gender.error && <S.Error>{gender.error}</S.Error>}
          <S.Input
            onKeyDown={handleEnter}
            value={age.value}
            onChange={e => update({ type: 'age', value: e.target.value })}
            placeholder="Age"
          />
          {age.error && <S.Error>{age.error}</S.Error>}
          <S.Input
            onKeyDown={handleEnter}
            value={email.value}
            onChange={e => update({ type: 'email', value: e.target.value })}
            placeholder="Email Address"
          />
          {email.error && <S.Error>{email.error}</S.Error>}
          <S.Divider height="10px" />
          <S.SubHeading>Your Vote (One Vote Per Person)</S.SubHeading>
          {Object.entries(candidates).map(([id, { name }]) => (
            <Checkbox
              key={id}
              id={id}
              name={name}
              vote={vote.value}
              onChange={e => update({ type: 'vote', value: id })}
            />
          ))}
          {vote.error && <S.Error>{vote.error}</S.Error>}
          <S.Vote onClick={submitForm}>
            <S.Lock src="/images/lock.png" />
            Cast Your Vote
          </S.Vote>
        </form>
      </S.Sheet>
    </S.Ballot>
  )
}

export default Ballot
