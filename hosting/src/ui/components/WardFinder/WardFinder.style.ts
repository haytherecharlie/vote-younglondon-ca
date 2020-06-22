import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const WardFinder = styled('div')({
  boxSizing: 'border-box',
  position: 'absolute',
  top: p => (p.collapsed ? '0px' : '50%'),
  left: `50%`,
  transform: p => (p.collapsed ? `translate(-50%, 0%)` : `translate(-50%, -50%)`),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  maxWidth: 600,
  width: `100%`,
  minWidth: 300,
  transition: `top .5s, transform .5s`,
  padding: 20,
  marginTop: -50
})

export const Logo = styled('img')({
  height: `auto`,
  width: 225,
  margin: `auto`,
  [theme.MEDIUM_QUERY]: {
    width: 150
  }
})

export const Divider = styled('div')({
  boxSizing: 'border-box',
  height: 1,
  background: theme.PRIMARY_COLOR,
  margin: `20px 10px 0px 10px`
})

export const HiddenWrapper = styled('div')({
  display: `flex`,
  flexDirection: `column`,
  position: 'relative',
  transform: p => (p.collapsed ? `translateY(-100%)` : `translateY(0%)`),
  transition: `transform .5s`
})

export const Title = styled('h2')({
  textAlign: 'center',
  fontSize: theme.FONT_MEDIUM,
  color: theme.PRIMARY_COLOR,
  [theme.MEDIUM_QUERY]: {
    fontSize: 20
  }
})

export const Paragraph = styled('p')({
  textAlign: 'center',
  fontSize: theme.FONT_SMALL,
  opacity: 0.6,
  margin: `10px 20px`
})

export const PlacesInput = styled('div')({
  margin: `auto`,
  width: `100%`,
  boxSizing: 'border-box',
  padding: 10,
  maxWidth: 350,
  display: 'flex',
  '& > .google-places-autocomplete': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
})
