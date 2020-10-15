import React from 'react'
import * as S from './Checkbox.style'

const Checkbox = ({ name, id, vote, onChange }) => {
  const checked = vote === id

  return (
    <S.Checkbox>
      <S.Selection>
        <S.Radio type="radio" name={name} value={name} onChange={onChange} checked={checked} />
        <S.Box className="checkmark" checked={checked} />
        {checked && (
          <S.Checkmark src="/images/checkmark.png" checked={checked} className="animated jackInTheBox faster" />
        )}
      </S.Selection>
      <S.Name>{name}</S.Name>
    </S.Checkbox>
  )
}

export default Checkbox
