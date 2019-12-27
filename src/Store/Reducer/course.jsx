import { FETCH_COURSES, FETCH_COURSES_CATALOG, FETCH_COURSE_DETAIL } from '../Action/type';
import data from '../../Services/data.json'
const initialState = {
    course: data,
    courseCatalog: [],
    courseDetail: null,

}




const Course = (state = initialState, action) => {


    switch (action.type) {
        case FETCH_COURSES: {
            let mangCapNhat = [...state.course]
            mangCapNhat = [...mangCapNhat, action.payload]
            return { ...state };
        }

        case FETCH_COURSES_CATALOG: {
            state.courseCatalog = action.payload
            return { ...state }

        }

        case FETCH_COURSE_DETAIL: {
           state.courseDetail = action.payload

        }

        // case FETCH_COURSE_PAGINATION: {
        //     state.coursePagination.items = action.payload.items
        //     state.coursePagination.currentPage = action.payload.currentPage
        //     state.coursePagination.count = action.payload.count
        //     state.coursePagination.totalPages = action.payload.totalPages
        //     return { ...state }
        // }

        default:
            return state
    }
}
export default Course
