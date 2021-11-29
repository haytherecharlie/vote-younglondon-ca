import React from 'react'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import { startDate, endDate } from 'config/default.json'

const Thanks = () => {
  const startStr = startDate.substring(0, startDate.length - 9)
  const endStr = endDate.substring(0,endDate.length - 9)
  return (
    <div
      style={{
        width: `100vw`,
        minWidth: 300,
        height: `100%`,
        minHeight: `100vh`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F0F3F8'
      }}>
      <Text
        size="XL"
        text="Voting is Closed"
        style={{ textAlign: 'center', margin: `20px 0`, fontFamily: 'arial' }}
        bold
        unique
      />
      <Text
        size="M"
        text={`Voting opens on 12:00 am of ${startStr} and closes at 12:00 am on  ${endStr}`}
        style={{ textAlign: 'center', fontFamily: 'arial' }}
        bold
        unique
      />
      <Link type="external" href="https://younglondon.ca/">
        <Text
          size="S"
          text="Return to Young London"
          style={{ marginTop: 10, textAlign: 'center', textDecoration: 'underline', fontFamily: 'arial' }}
          unique
        />
      </Link>
    </div>
  )
}

export default Thanks
