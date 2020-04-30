import {
  FETCH_COURSES,

  ADD_COURSE,
  DELETE_COURSE,
  UPDATE_COURSE,
} from "../Action/type";
import data from "../../Services/data.json";
const initialState = {
  course: data,

};

const Course = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES: {
      const newCourse = [...state.course, ...action.payload];
      state.course = newCourse;
      return { ...state };
    }

    case ADD_COURSE: {
      state.course.push(action.payload);
      return { ...state };
    }
    case DELETE_COURSE: {
      let newArr = [...state.course];
      newArr = state.course.filter(
        (course) => course.maKhoaHoc !== action.payload
      );
      state.course = newArr;
      return { ...state };
    }
    case UPDATE_COURSE: {
      let index = state.course.findIndex(
        (item) => item.maKhoaHoc === action.payload.maKhoaHoc
      );
      let newArr = [...state.course];

      newArr[index] = action.payload;
      state.course = newArr;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
export default Course;
