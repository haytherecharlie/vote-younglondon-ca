import React, { useEffect, useState } from 'react'
import qs from 'query-string'
import { auth } from 'services/firebase'
import VerifyReferendum from 'ui/components/VerifyReferendum'
import PageLayout from 'ui/layouts/PageLayout'

const AuthResponse = () => {
  const [voteData, setVoteData] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && auth().isSignInWithEmailLink(window.location.href)) {
      const params = qs.parse(window.location.search)
      auth()
        .signInWithEmailLink(params.email, window.location.href)
        .then(() => setVoteData(params))
        .catch(err => console.error(err))
    }
  }, [])

  return (
    <PageLayout page="ballot" crawl={false} style={{ alignItems: 'center', justifyContent: 'center' }}>
      {voteData && <VerifyReferendum voteData={voteData} />}
    </PageLayout>
  )
}

export default AuthResponse
