import { ADD_COURSE_FAVORIES, DELETE_COURSE_FAVORIES } from "../Action/type";
let data = JSON.parse(localStorage.getItem("courseFavorites"));
const initialState = data ? data : [];

const courseFavories = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_COURSE_FAVORIES: {
      let course = [...state];
      let index = course.findIndex(sp => sp.maKhoaHoc === payload.maKhoaHoc);

      if (index === -1) {
        course = [...course, payload];
      } else {
        return course;
      }
      localStorage.setItem("courseFavorites", JSON.stringify(course));
      return course;
    }

    case DELETE_COURSE_FAVORIES: {
      let courseFavorise = [...state];
      let index = courseFavorise.findIndex(
        item => item.maKhoaHoc === payload.maKhoaHoc
      );
      courseFavorise.splice(index, 1);
      state = courseFavorise;
      localStorage.setItem("courseFavorites", JSON.stringify(courseFavorise));


      return courseFavorise
    }

    default:
      return state;
  }
};

export default courseFavories;
