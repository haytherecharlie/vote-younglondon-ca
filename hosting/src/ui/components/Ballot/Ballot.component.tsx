import React from 'react'
import { useSelector } from 'react-redux'
import Checkbox from 'ui/atoms/Checkbox'
import * as S from './Ballot.style'

const Ballot = () => {
  const { ward } = useSelector(s => s.app)

  const handleEnter = e => {
    if (e.key === 'Enter') {
      const form = e.target.form
      const index = Array.prototype.indexOf.call(form, e.target)
      form.elements[index + 1].focus()
      e.preventDefault()
    }
  }


  return (
    <S.Ballot>
      <S.Logo src="/images/lyac.png" alt="LYAC logo" />
      <S.Sheet>
        <S.Title>{`Ward ${ward} Ballot`}</S.Title>
        <S.SubHeading>Personal Information</S.SubHeading>
        <form>
          <S.Input onKeyDown={handleEnter} placeholder="Your First Name" autoFocus />
          <S.Input onKeyDown={handleEnter} placeholder="Your Last Name" />
          <S.Input onKeyDown={handleEnter} placeholder="Gender" />
          <S.Input onKeyDown={handleEnter} placeholder="Age" />
          <S.Input onKeyDown={handleEnter} placeholder="Email Address" />
          <S.Input onKeyDown={handleEnter} placeholder="Cell Phone Number" />
          <S.Divider height="10px" />
          <S.SubHeading>Your Vote (One Vote Per Person)</S.SubHeading>
          {/* <Checkbox name="Marcus D. Jones" />
          <Checkbox name="David Amhurst Williamson" />
          <Checkbox name="Sven Proust" /> */}
          <S.Divider height="10px" />
          <S.SubHeading>Referendum Question</S.SubHeading>
          <S.Text>What could London do to improve transportation for youth?</S.Text>
          <S.Input placeholder="Tell us what you think!" />
          <S.Vote>
            <S.Lock src="/images/lock.png" />
            Cast Your Vote
          </S.Vote>
        </form>
      </S.Sheet>
    </S.Ballot>
  )
}

export default Ballot
