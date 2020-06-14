import * as A from 'services/redux/actions'

const defaultState = {
  address: null,
  ward: null
}

const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case A.ADDRESS:
      return { ...state, address: action.address, ward: action.ward }
    default:
      return state
  }
}

export default uiReducer
