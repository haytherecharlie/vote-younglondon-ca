import React, { useEffect, useState } from 'react'
import {Redirect} from '@reach/router'
import GlobalStyle from 'ui/assets/theme/global.style'
import SEO from 'ui/atoms/SEO'
import Spinner from 'ui/atoms/Spinner'
import * as S from './PageLayout.style'

const PageLayout = ({ children, page, crawl, style = {} }) => {
  const [open, setOpen] = useState('pending')

  useEffect(() => {
    const now = new Date().getTime()
    const open = new Date('November 20, 2021 00:00:00').getTime()
    const close = new Date('November 30, 2021 00:00:00').getTime()
    setOpen(now > open && now < close ? 'open' : 'closed')
  }, [])

  return (
    <S.PageLayout>
      <GlobalStyle />
      <SEO page={page} crawl={crawl} />
      {open === 'pending' && <Spinner />}
      {open === 'open' && <S.Main style={style}>{children}</S.Main>}
      {open === 'closed' && <Redirect to="/closed" />}
    </S.PageLayout>
  )
}

export default PageLayout
