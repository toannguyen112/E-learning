import { combineReducers } from "redux";
import Course from "./course";
import display from "./display"
import cart from '../Reducer/cart'
import currentUser from '../Reducer/currentUser'
import editUser from '../Reducer/editUser'
import editCourse from '../Reducer/editCourse'
import user from '../Reducer/User'
import courseFavories from '../Reducer/courseFavories'


const rootReducer = combineReducers({
  Course,
  display,
  cart,
  currentUser,
  editUser, 
  editCourse,
  user,
  courseFavories,
  
});

export default rootReducer;
