import React, { useEffect } from 'react'
import pathOr from 'ramda.pathor'
import { useSelector } from 'react-redux'
import BallotForm from 'ui/components/Ballot'
import PageLayout from 'ui/layouts/PageLayout'

const Ballot = ({ navigate }) => {
  const ward = useSelector(s => pathOr(null, ['app', 'ward'], s))

  useEffect(() => {
    if (!ward) navigate('/')
  }, [])

  return (
    <PageLayout page="404" crawl={false} style={{ alignItems: 'center', justifyContent: 'center' }}>
      {ward && <BallotForm />}
    </PageLayout>
  )
}

export default Ballot
