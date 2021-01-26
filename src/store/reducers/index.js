import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import apartmentReducer from './apartmentReducer';

export default combineReducers({
  errors: errorReducer,
  apartment: apartmentReducer,
});
