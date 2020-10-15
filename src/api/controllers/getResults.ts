import { db } from 'services/firebase'

const getResults = async () => {
  try {
    const votesCol = await db().collection('results').get()
    return await votesCol.docs.reduce((acc, doc) => {
      const votes = doc.data().votes
      return { candidates: { ...acc.candidates, [doc.id]: votes }, total: acc.total += votes }
    }, { candidates: {}, total: 0 })
  } catch (err) {
    throw err
  }
}

export default getResults
