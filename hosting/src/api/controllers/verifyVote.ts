import qs from 'query-string'
import { auth, db } from 'services/firebase'
import store from 'services/redux'

const verifyVote = async () => {
  try {
    if (auth().isSignInWithEmailLink(window.location.href)) {
      const { e: email, v: vote } = qs.parse(window.location.search)
      await auth().signInWithEmailLink(email, window.location.href)
      const voteRef = db().doc(`votes/${email}`)
      const candidateRef = db().doc(`candidates/${vote}`)
      const voteReq = await voteRef.get()
      if (voteReq.exists) {
        await Promise.all([
          voteRef.update({ verified: true }),
          candidateRef.update({ votes: db.FieldValue.increment(1) })
        ])
        return store.dispatch({ type: 'LOADING', loading: false })
      }
    }
  } catch (err) {
    console.error(err)
    throw err
  }
}

export default verifyVote
