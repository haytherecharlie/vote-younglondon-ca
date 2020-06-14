import React from 'react'
import useGeoLookup from 'ui/hooks/useGeoLookup'
import Spinner from 'ui/atoms/Spinner'
import * as S from './GeoLookup.style'

const GeoLookup = () => {
  const status = useGeoLookup()

  return (
    <S.GeoLookup>
      <Spinner />
      <span>{status}</span>
    </S.GeoLookup>
  )
}

export default GeoLookup
