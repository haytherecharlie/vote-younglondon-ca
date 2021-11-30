import { db } from 'services/firebase'

const castBallot = async (email, ballotObj) => {
  try {
    const voteRef = db().collection('votes').doc(email)
    const voteDoc = await voteRef.get()
    if (voteDoc.exists) return false
    const resultsRef = db().collection('results').doc(ballotObj.vote)
    return await Promise.all([voteRef.set(ballotObj), resultsRef.update({ votes: db.FieldValue.increment(1) })])
  } catch (err) {
    throw err
  }
}

export default castBallot
