import qs from 'query-string'
import { auth } from 'services/firebase'

const castBallot = async (email, ballotObj) => {
  try {
    const params = qs.stringify(ballotObj)
    const options = { handleCodeInApp: true, url: `http://localhost:8000/verify?${params}` }
    return await auth().sendSignInLinkToEmail(email, options)
  } catch (err) {
    throw err
  }
}

export default castBallot
