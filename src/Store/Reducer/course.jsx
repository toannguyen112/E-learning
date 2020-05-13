import {
  FETCH_COURSES,
  ADD_COURSE,
  DELETE_COURSE,
  UPDATE_COURSE,
  SORT_PRICE_HIGH_TO_LOW,
  SORT_PRICE_LOW_TO_HIGH,
  SORT_NAME_HIGH_TO_LOW,
  SORT_NAME_LOW_TO_HIGH,
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
    case SORT_PRICE_LOW_TO_HIGH: {
      console.log("lowtohigh");

      let newArr = [...state.course];
      newArr.sort((a, b) => {
        return a.price - b.price;
      });

      state.course = newArr;
      return { ...state };
    }
    case SORT_PRICE_HIGH_TO_LOW: {
      console.log("hightolow");

      let newArr = [...state.course];
      newArr.sort((a, b) => {
        return b.price - a.price;
      });

      state.course = newArr;
      return { ...state };
    }
    case SORT_NAME_HIGH_TO_LOW: {
      let newArr = [...state.course];
      newArr.sort((a, b) => {
        var nameA = a.tenKhoaHoc.toUpperCase();
        var nameB = b.tenKhoaHoc.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });

      state.course = newArr;
      return { ...state };
    }
    case SORT_NAME_LOW_TO_HIGH: {
      let newArr = [...state.course];
      newArr.sort((a, b) => {
        var nameA = a.tenKhoaHoc.toUpperCase();
        var nameB = b.tenKhoaHoc.toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }

        return 0;
      });

      state.course = newArr;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
export default Course;
