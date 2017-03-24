import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
const rootReducer = combineReducers({
  fuelSavings,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
