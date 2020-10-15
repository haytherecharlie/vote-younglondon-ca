import React from 'react'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import PageLayout from 'ui/layouts/PageLayout'

const Thanks = () => {
  return (
    <PageLayout page="thanks" crawl={false} style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text size="XL" text="Thank You!" style={{ textAlign: 'center', marginTop: 10 }} bold unique />
      <Text size="M" text="Your vote has been submitted" style={{ textAlign: 'center' }} bold unique />
      <Link type="external" href="https://younglondon.ca/">
        <Text size="S" text="Return to Young London" style={{ marginTop: 10, textAlign: 'center', textDecoration: 'underline' }} unique />
      </Link>
    </PageLayout>
  )
}

export default Thanks
