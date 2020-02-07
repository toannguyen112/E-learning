import { ADD_COURSE_FAVORIES, DELETE_COURSE_FAVORIES } from "../Action/type";
let data = JSON.parse(localStorage.getItem("courseFavorites"));
const initialState = data ? data : [];

const courseFavories = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_COURSE_FAVORIES: {
            let courseFavorise = [...state];
            let index = courseFavorise.findIndex(
                sp => sp.maKhoaHoc === payload.maKhoaHoc
            );

            if (index === -1) {
                courseFavorise = [...courseFavorise, payload];
            } else {
                return courseFavorise;
            }
            localStorage.setItem("courseFavorites", JSON.stringify(courseFavorise));
            return courseFavorise;
        }

        case DELETE_COURSE_FAVORIES: {
        }

        default:
            return state;
    }
};

export default courseFavories;
