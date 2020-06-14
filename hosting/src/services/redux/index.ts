import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import app from 'services/redux/reducers/app'
import ui from 'services/redux/reducers/ui'

const reducer = combineReducers({ app, ui })

export default createStore(reducer, composeWithDevTools())
