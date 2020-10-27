import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const Ballot = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  width: `90%`,
  maxWidth: 800,
  marginBottom: 20,
  minHeight: 300,
  overflow: 'hidden'
})

export const CopyText = styled('span')({
  color: theme.DEFAULT_COLOR,
  opacity: 0.7
})

export const PrivacyLink = styled('a')({
  color: theme.BRAND_COLOR,
  fontSize: theme.FONT_SMALL
})

export const Logo = styled('img')({
  height: `auto`,
  margin: `20px auto`,
  width: 100
})

export const Sheet = styled('div')({
  flex: 0,
  padding: `20px 40px 40px 40px`,
  borderRadius: 25,
  background: theme.BALLOT_COLOR,
  boxShadow: `0px 0px 10px rgba(0,0,0,0.1)`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-start'
})

export const Title = styled('h1')({
  textAlign: 'center',
  fontSize: theme.FONT_LARGE,
  color: theme.DEFAULT_COLOR,
  [theme.MEDIUM_QUERY]: {
    fontSize: theme.FONT_MEDIUM
  }
})

export const SubHeading = styled('h2')({
  width: `100%`,
  fontSize: 20,
  color: theme.DEFAULT_COLOR,
  [theme.MEDIUM_QUERY]: {
    fontSize: theme.FONT_SMALL
  }
})

export const Divider = styled('div')({
  width: '100%',
  height: p => p.height
})

export const Input = styled('input')(P => ({
  ...theme.INPUT_STYLE,
  '&:focus': {
    outline: 'none',
    boxShadow: P.valid === 'invalid' ? `0 0 3px red` :  `0 0 3px blue`
  }
}))

export const Text = styled('div')({
  margin: `10px 5px 0 10px`
})

export const Lock = styled('img')({
  height: 12,
  width: `auto`,
  margin: `0 5px 0 0`
})

export const Vote = styled('button')(P => ({
  opacity: P.disabled ? 0.5 : 1,
  background: theme.PRIMARY_COLOR,
  padding: `10px 20px`,
  borderRadius: 5,
  fontSize: theme.FONT_SMALL,
  border: `#000`,
  width: `100%`,
  textAlign: 'center',
  color: `#FFF`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: `40px 0 20px 0`
}))

export const Error = styled('span')({
  color: 'red',
  fontSize: 12
})
