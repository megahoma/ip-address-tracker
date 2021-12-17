import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './ducks/reducers/notificationReducer'
import geoReducer from './ducks/reducers/geoReducer'

const reducer = combineReducers({
  notification: notificationReducer,
  geo: geoReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
