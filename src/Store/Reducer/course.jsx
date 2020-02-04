import {
  FETCH_COURSES,
  FETCH_COURSES_CATALOG,
  FETCH_COURSE_DETAIL,
  ADD_COURSE,
  DELETE_COURSE,
  UPDATE_COURSE
} from "../Action/type";
import data from "../../Services/data.json";
const initialState = {
  course: [],
  courseCatalog: [],
  courseDetail: null
};

const Course = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES: {
      state.course = action.payload;

      console.log(state.course);
      return { ...state };
    }

    case FETCH_COURSES_CATALOG: {
      state.courseCatalog = action.payload;
      return { ...state };
    }

    case FETCH_COURSE_DETAIL: {
      state.courseDetail = action.payload;
      return { ...state };
    }

    case ADD_COURSE: {
      state.course.push(action.payload);
      return { ...state };
    }
    case DELETE_COURSE: {
      let newArr = [...state.course];
      newArr = state.course.filter(
        course => course.maKhoaHoc !== action.payload
      );
      state.course = newArr;
      return { ...state };
    }
    case UPDATE_COURSE: {
      let index = state.course.findIndex(
        item => item.maKhoaHoc === action.payload.maKhoaHoc
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
