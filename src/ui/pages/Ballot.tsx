import React from 'react'
import BallotForm from 'ui/components/Ballot'
import PageLayout from 'ui/layouts/PageLayout'

const Ballot = ({ navigate }) => {
  return (
    <PageLayout page="ballot" crawl={false} style={{ alignItems: 'center', justifyContent: 'center' }}>
      <BallotForm />
    </PageLayout>
  )
}

export default Ballot
