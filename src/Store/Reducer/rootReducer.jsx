import { combineReducers } from "redux";
import Course from "./course";
import display from "./display"



const rootReducer = combineReducers({
  Course,
  display
});

export default rootReducer;
