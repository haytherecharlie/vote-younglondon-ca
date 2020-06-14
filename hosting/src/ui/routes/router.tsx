import React from 'react'
import { Router } from '@reach/router'
import WardFinder from 'ui/pages/WardFinder'
import Ballot from 'ui/pages/Ballot'

const AppRouter = () => {
  return (
    <Router basepath="/">
      <WardFinder path="/" />
      <Ballot path="/ballot" />
    </Router>
  )
}

export default AppRouter
