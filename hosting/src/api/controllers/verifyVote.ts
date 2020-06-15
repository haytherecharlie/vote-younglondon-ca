import { db } from 'services/firebase'

const verifyVote = async data => {
  try {
    const voteRef = db().collection('votes').doc(data.email)
    const candidateRef = db().doc(`candidates/${data.vote}`)
    const voteReq = await voteRef.get()

    if (!voteReq.exists) {
      return await Promise.all([voteRef.set(data), candidateRef.update({ votes: db.FieldValue.increment(1) })])
    }

    return false
  } catch (err) {
    throw err
  }
}

export default verifyVote
