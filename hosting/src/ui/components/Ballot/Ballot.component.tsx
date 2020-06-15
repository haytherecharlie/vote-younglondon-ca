import React from 'react'
import pathOr from 'ramda.pathor'
import { useSelector } from 'react-redux'
import useValidateForm from 'ui/hooks/useValidateFormReducer'
import Checkbox from 'ui/atoms/Checkbox'
import * as S from './Ballot.style'

const Ballot = () => {
  const [{ first, last, gender, age, email, phone, vote, referendum }, update] = useValidateForm()
  const { address, candidates, ward } = useSelector(s => pathOr({ ward: null, candidates: {} }, ['app'], s))

  const submitForm = (e = null) => {
    if (e) e.preventDefault()
    console.table({ first, last, gender, age, email, phone, vote, referendum })
    return [first, last, gender, age, email, phone, vote, referendum].some(o => o.value === '' && o.valid !== 'valid')
      ? update({ type: 'find-errors' })
      : console.log('YES')
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
          <S.Input
            onKeyDown={handleEnter}
            value={phone.value}
            onChange={e => update({ type: 'phone', value: e.target.value })}
            placeholder="Cell Phone Number"
          />
          {phone.error && <S.Error>{phone.error}</S.Error>}
          <S.Divider height="10px" />
          <S.SubHeading>Your Vote (One Vote Per Person)</S.SubHeading>
          {Object.entries(candidates).map(([id, { name }]) => (
            <Checkbox key={id} id={id} name={name} vote={vote.value} onChange={e => update({ type: 'vote', value: id })} />
          ))}
          {vote.error && <S.Error>{vote.error}</S.Error>}
          <S.Divider height="10px" />
          <S.SubHeading>Referendum Question</S.SubHeading>
          <S.Text>What could London do to improve transportation for youth?</S.Text>
          <S.Input
            onKeyDown={handleEnter}
            value={referendum.value}
            onChange={e => update({ type: 'referendum', value: e.target.value })}
            placeholder="Tell us what you think!"
          />
          {referendum.error && <S.Error>{referendum.error}</S.Error>}
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
