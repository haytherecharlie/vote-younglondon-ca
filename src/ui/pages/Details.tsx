import React, { useEffect, useState } from 'react'
import { db } from 'services/firebase'

export default () => {
  const [results, setResults] = useState([])

  const getResults = async () => {
    const snapshot = await db().collection('votes').get()
    setResults(snapshot.docs.reduce((acc, doc) => [...acc, doc.data()], []))
  }

  useEffect(() => {
    getResults()
  }, [])
  return (
    <table>
      {results.map(result => (
        <tr>
          <td>{result.vote}</td>
          <td>{result.first}</td>
          <td>{result.last}</td>
          <td>{result.email}</td>
          <td>{result.gender}</td>
          <td>{result.referendum}</td>
        </tr>
      ))}
    </table>
  )
}
