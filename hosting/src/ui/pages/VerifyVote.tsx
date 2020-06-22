import React, { useEffect } from 'react'
import { verifyVote } from 'api/routes'
import Text from 'ui/atoms/Text'
import PageLayout from 'ui/layouts/PageLayout'

const VerifyVote = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('verifying')
      verifyVote()
    }
  }, [])

  return (
    <PageLayout page="ballot" crawl={false} style={{ alignItems: 'center', justifyContent: 'center' }}>
      <img
        src="/images/lyac.png"
        alt="LYAC logo"
        style={{
          height: `auto`,
          margin: `20px auto`,
          width: 100
        }}
      />
      <Text size="L" text="Thank You!" style={{ textAlign: 'center' }} unique />
      <Text
        size="S"
        text="Your vote has been cast!"
        style={{ color: '#000', textAlign: 'center' }}
        unique
      />
    </PageLayout>
  )
}

export default VerifyVote
