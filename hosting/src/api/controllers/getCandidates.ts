import { db } from 'services/firebase'

const getCandidates = async ward => {
  try {
    const collection = await db().collection('candidates').where('ward', '==', ward).limit(10).get()
    return collection.docs.reduce((acc, doc) => ({ ...acc, [doc.id]: doc.data() }), {})
  } catch (err) {
    throw err
  }
}

export default getCandidates
