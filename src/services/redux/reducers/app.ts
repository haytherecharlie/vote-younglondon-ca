import * as A from 'services/redux/actions'

const defaultState = {
  address: null,
  ward: 0,
  candidates: { "001": 'john A' },
  startDate: null,
  endDate: null
}

const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case A.ADDRESS:
      return { ...state, address: action.address, ward: action.ward }
    case A.ELECTION:
      return { ...state, ...action.data }
    default:
      return state
  }
}

export default uiReducer
