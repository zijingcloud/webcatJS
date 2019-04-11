import { combineReducers } from 'redux'
import counter from './counter'
import conference from './conference'

export default combineReducers({
  counter,
  conference
})