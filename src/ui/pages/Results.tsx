import React, { useEffect, useState } from 'react'
import { getResults } from 'api/routes'
import Text from 'ui/atoms/Text'

const Results = () => {
  const [results, setResults] = useState(null)
  useEffect(() => {
    getResults().then(data => setResults(data))
  }, [])

  return results ? (
    <div
      style={{ minHeight: `100vh`, width: `100vw`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <table style={{ textAlign: 'left' }}>
        <thead>
          <tr>
            <th>
              <Text size="M" text="CANDIDATE" bold unique />
            </th>
            <th>
              <Text size="M" text="VOTES" bold unique />
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(results.candidates).map(([key, value]) => (
            <tr key={key}>
              <td style={{ paddingRight: 30 }}>
                <Text size="M" text={key} unique />
              </td>
              <td>
                <Text size="M" text={value.toString()} unique />
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <Text size="M" text="TOTAL VOTES: " unique />
            </td>
            <td>
              <Text size="M" text={results.total.toString()} unique />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    <div>loading...</div>
  )
}

export default Results
