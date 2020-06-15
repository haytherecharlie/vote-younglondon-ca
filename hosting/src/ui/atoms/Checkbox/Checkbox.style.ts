import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const Checkbox = styled('label')({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  margin: `10px 5px`
})

export const Selection = styled('div')({
  position: 'relative',
  marginRight: 5
})

export const Radio = styled('input')({
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  height: 15,
  width: 15,
  border: '1px solid green',
  '&:focus + div': {
    outline: 'none',
    boxShadow: `0 0 3px blue`
  }
})

export const Box = styled('div')({
  height: 15,
  width: 15,
  borderRadius: `50%`,
  border: `2px solid ${theme.DEFAULT_COLOR}`
})

export const Checkmark = styled('img')({
  opacity: p => (p.checked ? 1 : 0),
  position: 'absolute',
  top: -1,
  left: 5,
  height: 15,
  width: 15
})

export const Name = styled('span')({})
