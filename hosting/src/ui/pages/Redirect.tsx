import React, { useEffect } from 'react'
import { navigate } from '@reach/router'
import qs from 'query-string'
import Text from 'ui/atoms/Text'
import PageLayout from 'ui/layouts/PageLayout'

const Redirect = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const {continueUrl} = qs.parse(window.location.search)
      window.location.href = continueUrl
    }
  }, [])

  return (
    <PageLayout page="ballot" crawl={false} style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text size="L" text="Redirecting..." unique />
    </PageLayout>
  )
}

export default Redirect
