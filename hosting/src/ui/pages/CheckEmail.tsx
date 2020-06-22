import React from 'react'
import Text from 'ui/atoms/Text'
import PageLayout from 'ui/layouts/PageLayout'

const CheckEmail = () => {
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
      <Text size="L" text="We have sent you an email to verify your vote." style={{ textAlign: 'center' }} unique />
      <Text
        size="S"
        text="Please Note: Your vote will not be counted until the verification link has been clicked."
        style={{ color: '#000', textAlign: 'center' }}
        unique
      />
    </PageLayout>
  )
}

export default CheckEmail