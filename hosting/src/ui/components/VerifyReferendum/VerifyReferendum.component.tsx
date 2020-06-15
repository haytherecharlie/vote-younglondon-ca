import React from 'react'
import { navigate } from '@reach/router'
import { verifyVote } from 'api/routes'
import useValidateForm from 'ui/hooks/useValidateFormReducer'
import * as S from './VerifyReferendum.style'

const VerifyReferendum = ({ voteData }) => {
  const [{ referendum }, update] = useValidateForm()

  const submitForm = async (e = null) => {
    if (e) e.preventDefault()
    if ([referendum].some(o => o.value !== '' && o.valid === 'valid')) {
      await verifyVote({ ...voteData, referendum: referendum.value })
      return navigate('/thanks')
    }
    return update({ type: 'find-errors' })
  }

  return (
    <S.Ballot>
      <S.Logo src="/images/lyac.png" alt="LYAC logo" />
      <S.Sheet>
        <S.Title>{`Verify Vote`}</S.Title>
        <S.SubHeading>Your Vote</S.SubHeading>
        <S.Text>{`First Name: ${voteData.first}`}</S.Text>
        <S.Text>{`Last Name: ${voteData.last}`}</S.Text>
        <S.Text>{`Ward: ${voteData.ward}`}</S.Text>
        <S.Text>{`Candidate: ${voteData.vote}`}</S.Text>
        <form onSubmit={submitForm} style={{ marginTop: 20 }}>
          <S.SubHeading>Referendum Question</S.SubHeading>
          <S.Text>What could London do to improve transportation for youth?</S.Text>
          <S.Input
            value={referendum.value}
            onChange={e => update({ type: 'referendum', value: e.target.value })}
            placeholder="Tell us what you think!"
          />
          {referendum.error && <S.Error>{referendum.error}</S.Error>}
          <S.Vote onClick={submitForm}>
            <S.Lock src="/images/lock.png" />
            Verify My Vote
          </S.Vote>
        </form>
      </S.Sheet>
    </S.Ballot>
  )
}

export default VerifyReferendum
