import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import reservationsErrorsReducer from './reservations_errors_reducer';

export default combineReducers({
    session: sessionErrorsReducer,
    reservations: reservationsErrorsReducer
});