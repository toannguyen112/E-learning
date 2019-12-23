import { FETCH_COURSES, FETCH_COURSES_CATALOG, FETCH_COURSE_DETAIL, FETCH_COURSE_PAGINATION } from '../Action/type'
const initialState = {
    course: [],
    courseCatalog: [],
    courseDetail: null,
    coursePagination  :  {
        currentPage: "",
        count: "",
        totalPages: "",
        totalCount: "",
        items: []
    }
}




const Course = (state = initialState, { type, payload }) => {


    switch (type) {
        case FETCH_COURSES: {
            state.course = payload
            return { ...state }
        }

        case FETCH_COURSES_CATALOG: {
            state.courseCatalog = payload
            return { ...state }

        }

        case FETCH_COURSE_DETAIL: {
            state.courseDetail = payload
            return { ...state }

        }

        case FETCH_COURSE_PAGINATION: {
            state.coursePagination.items = payload.items
            state.coursePagination.currentPage = payload.currentPage
            state.coursePagination.count = payload.count
            state.coursePagination.totalPages = payload.totalPages
            return { ...state }
        }

        default:
            return state
    }
}
export default Course
