import * as A from 'services/redux/actions'

const defaultState = {
  address: null,
  ward: null,
  candidates: null
}

const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case A.ADDRESS:
      return { ...state, address: action.address, candidates: action.candidates, ward: action.ward }
    default:
      return state
  }
}

export default uiReducer
