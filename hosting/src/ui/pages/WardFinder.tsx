import React from 'react'
import FindWard from 'ui/components/WardFinder'
import PageLayout from 'ui/layouts/PageLayout'

const WardFinder = () => {
  return (
    <PageLayout page="404" crawl={false} style={{ alignItems: 'center', justifyContent: 'center' }}>
      <FindWard />
    </PageLayout>
  )
}

export default WardFinder
