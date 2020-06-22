import qs from 'query-string'
import { auth, db } from 'services/firebase'

const castBallot = async (email, ballotObj) => {
  try {
    const voteRef = db().collection('votes').doc(email)
    const params = qs.stringify({ e: email, v: ballotObj.vote })
    const options = { handleCodeInApp: true, url: `https://vote.younglondon.ca/verify?${params}` }
    return await Promise.all([voteRef.set(ballotObj), auth().sendSignInLinkToEmail(email, options)])
  } catch (err) {
    throw err
  }
}

export default castBallot
