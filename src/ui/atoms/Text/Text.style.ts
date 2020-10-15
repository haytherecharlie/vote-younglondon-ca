import styled from 'styled-components'
import theme from 'ui/assets/theme'

const LinkStyle = {
  true: {
    textDecoration: `underline`,
    textDecorationColor: theme.BRAND_COLOR,
    '&:hover': {
      textDecoration: 'none'
    }
  },
  false: {}
}

export const XLarge = styled('h1')(P => ({
  fontSize: theme.FONT_LARGE,
  fontWeight: 500,
  fontFamily: 'lyac',
  letterSpacing: 0,
  color: theme.PRIMARY_COLOR,
  margin: 0,
  padding: 0,
  ...LinkStyle[P.link],
  ...P.style
}))

export const Large = styled('h2')(P => ({
  fontSize: theme.FONT_LARGE,
  fontWeight: 500,
  fontFamily: 'lyac',
  letterSpacing: 0,
  color: theme.PRIMARY_COLOR,
  marginTop: 0,
  ...LinkStyle[P.link],
  ...P.style
}))

export const Medium = styled('h3')(P => ({
  fontSize: theme.FONT_MEDIUM,
  fontWeight: 500,
  fontFamily: 'lyac',
  letterSpacing: 0,
  color: theme.PRIMARY_COLOR,
  marginTop: 0,
  ...LinkStyle[P.link],
  ...P.style
}))

export const Small = styled('p')(P => ({
  fontSize: theme.FONT_SMALL,
  fontWeight: 500,
  fontFamily: 'lyac',
  letterSpacing: 0,
  color: theme.PRIMARY_COLOR,
  margin: 0,
  padding: 0,
  ...LinkStyle[P.link],
  ...P.style
}))

export const XSmall = styled('p')(P => ({
  fontSize: theme.FONT_SMALL,
  fontWeight: 500,
  fontFamily: 'lyac',
  letterSpacing: 0,
  color: theme.PRIMARY_COLOR,
  margin: 0,
  padding: 0,
  ...LinkStyle[P.link],
  ...P.style
}))
