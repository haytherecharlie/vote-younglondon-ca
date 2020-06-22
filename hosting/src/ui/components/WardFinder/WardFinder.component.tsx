import React, { useState } from 'react'
import { navigate } from '@reach/router'
import AutoComplete from 'react-google-places-autocomplete'
import AddressInput from 'ui/atoms/AddressInput'
import AddressSuggestions from 'ui/atoms/AddressSuggestions'
import geoLookup from 'ui/helpers/geoLookup'
import * as S from './WardFinder.style'

const WardFinder = () => {
  const [value, setValue] = useState('')

  const focusInput = () => setValue('')

  const changeInput = (e, onChange) => {
    setValue(e.target.value)
    onChange(e)
  }

  const selectPlaceInput = async ({ description }) => {
    try {
      setValue(description)
      await geoLookup(description)
      return navigate('/ballot')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <S.WardFinder>
      <S.Logo src="/images/lyac.png" alt="LYAC logo" />
      <S.Divider />
      <S.Title>Welcome to the LYAC election ballot</S.Title>
      <S.PlacesInput>
        <AutoComplete
          onSelect={selectPlaceInput}
          renderInput={({ onChange, onKeyDown }) => (
            <AddressInput
              value={value}
              onFocus={focusInput}
              onChange={e => changeInput(e, onChange)}
              onKeyDown={onKeyDown}
            />
          )}
          renderSuggestions={(active, suggestions, onSelect) => (
            <AddressSuggestions active={active} suggestions={suggestions} onSelect={onSelect} />
          )}
          autocompletionRequest={{
            bounds: [
              { lat: 42.82311, lng: -81.61263 },
              { lat: 43.07441, lng: -80.88478 }
            ],
            componentRestrictions: { country: 'CA' },
            types: []
          }}
        />
      </S.PlacesInput>
      <S.Paragraph>
        You can vote from either your home address or your school (whichever you identify most with). If you are voting
        from your school it often helps to write 'Elementary School' or 'Secondary School' to ensure it will show up in
        the search bar below.
      </S.Paragraph>
    </S.WardFinder>
  )
}

export default WardFinder
