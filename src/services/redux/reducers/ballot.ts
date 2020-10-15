import * as A from 'services/redux/actions'

const defaultState = {
  firstName: '',
  lastName: '',
  gender: '',
  age: 0,
  email: '',
  phone: '',
  vote: '',
  referendum: ''
}

const ballotReducer = (state = defaultState, action) => {
  switch (action.type) {
    case A.BALLOT:
      return { ...state, ...action.ballot }
    default:
      return state
  }
}

export default ballotReducer
