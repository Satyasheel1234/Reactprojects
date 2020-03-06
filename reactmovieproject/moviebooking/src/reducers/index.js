import { combineReducers } from 'redux';
import movies from './latestMoviereducers';
import upcoming from './upcomingMoviereducers';
import event from './eventMovie'

const rootReducer = combineReducers({
  movies,
  upcoming,
  event
})

export default rootReducer;