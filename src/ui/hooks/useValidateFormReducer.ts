import { useReducer, useRef } from 'react'
import { vName, vGender, vAge, vEmail, vPhone, vPostal, vVote, vReferendum } from 'ui/helpers/validations'

const useValidateForm = () => {
  const defaultState = {
    first: { value: '', valid: 'pending', error: null },
    last: { value: '', valid: 'pending', error: null },
    gender: { value: '', valid: 'pending', error: null },
    age: { value: '', valid: 'pending', error: null },
    email: { value: '', valid: 'pending', error: null },
    phone: { value: '', valid: 'pending', error: null },
    postal: { value: '', valid: 'pending', error: null },
    vote: { value: '', valid: 'pending', error: null },
    referendum: { value: '', valid: 'pending', error: null }
  }

  const reducer = (state, action) => {
    const { value = state.value, valid } = action
    switch (action.type) {
      case 'first':
        return vName(value) === 'valid'
          ? { ...state, first: { ...state.first, value, valid: valid ? valid : 'valid', error: null } }
          : {
              ...state,
              first: { ...state.first, value, valid: 'invalid', error: 'Please include a valid first name.' }
            }
      case 'last':
        return vName(value) === 'valid'
          ? { ...state, last: { ...state.last, value, valid: valid ? valid : 'valid', error: null } }
          : { ...state, last: { ...state.last, value, valid: 'invalid', error: 'Please include a valid last name.' } }
      case 'gender':
        return vGender(value) === 'valid'
          ? { ...state, gender: { ...state.gender, value, valid: valid ? valid : 'valid', error: null } }
          : {
              ...state,
              gender: { ...state.gender, value, valid: 'invalid', error: 'Please include a gender or type N/A.' }
            }
      case 'age':
        return vAge(value) === 'valid'
          ? { ...state, age: { ...state.age, value, valid: valid ? valid : 'valid', error: null } }
          : {
              ...state,
              age: { ...state.age, value, valid: 'invalid', error: 'Please include a valid age between 10 - 120.' }
            }
      case 'email':
        return vEmail(value) === 'valid'
          ? { ...state, email: { ...state.email, value, valid: valid ? valid : 'valid', error: null } }
          : {
              ...state,
              email: { ...state.email, value, valid: 'invalid', error: 'Please include a valid email address.' }
            }
      case 'phone':
        return vPhone(value) === 'valid'
          ? { ...state, phone: { ...state.phone, value, valid: valid ? valid : 'valid', error: null } }
          : {
              ...state,
              phone: { ...state.phone, value, valid: 'invalid', error: 'Please include a valid Canadian phone number.' }
            }
      case 'postal':
        return vPostal(value) === 'valid'
          ? { ...state, postal: { ...state.postal, value, valid: valid ? valid : 'valid', error: null } }
          : {
              ...state,
              postal: { ...state.postal, value, valid: 'invalid', error: 'Please include a valid London, ON postal code.' }
            }
      case 'vote':
        return vVote(value) === 'valid'
          ? { ...state, vote: { ...state.vote, value, valid: valid ? valid : 'valid', error: null } }
          : { ...state, vote: { ...state.vote, value, valid: 'invalid', error: 'Please include a vote.' } }
      case 'referendum':
        return vReferendum(value) === 'valid'
          ? { ...state, referendum: { ...state.referendum, value, valid: valid ? valid : 'valid', error: null } }
          : {
              ...state,
              referendum: {
                ...state.referendum,
                value,
                valid: 'invalid',
                error: 'Please include a response to the referendum.'
              }
            }
      case 'already-voted':
        return { ...state, email: { ...state.email, valid: 'invalid', error: 'This email address has already voted.' } }
      case 'find-errors':
        return {
          first:
            vName(state.first.value) !== 'valid'
              ? { ...state.first, valid: 'invalid', error: 'Please include a valid first name.' }
              : state.first,
          last:
            vName(state.last.value) !== 'valid'
              ? { ...state.last, valid: 'invalid', error: 'Please include a valid last name.' }
              : state.last,
          gender:
            vGender(state.gender.value) !== 'valid'
              ? { ...state.gender, valid: 'invalid', error: 'Please include a gender or type N/A.' }
              : state.gender,
          age:
            vAge(state.age.value) !== 'valid'
              ? { ...state.age, valid: 'invalid', error: 'Please include a valid age between 10 - 120.' }
              : state.age,
          email:
            vEmail(state.email.value) !== 'valid'
              ? { ...state.email, valid: 'invalid', error: 'Please include a valid email address.' }
              : state.email,
          phone:
            vPhone(state.phone.value) !== 'valid'
              ? { ...state.phone, valid: 'invalid', error: 'Please include a valid Canadian phone number.' }
              : state.phone,
          vote:
            vVote(state.vote.value) !== 'valid'
              ? { ...state.vote, valid: 'invalid', error: 'Please include a vote.' }
              : state.vote,
          referendum:
            vReferendum(state.referendum.value) !== 'valid'
              ? { ...state.referendum, valid: 'invalid', error: 'Please include a response to the referendum.' }
              : state.referendum
        }
      default:
        return state
    }
  }

  return useReducer(reducer, defaultState)
}

export default useValidateForm
