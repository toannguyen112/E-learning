import { combineReducers } from "redux";
import Course from "./course";
import display from "./display"
import cart from '../Reducer/cart'
import currentUser from '../Reducer/currentUser'

const rootReducer = combineReducers({
  Course,
  display,
  cart,
  currentUser
});

export default rootReducer;
