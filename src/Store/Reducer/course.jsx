import { FETCH_COURSES, FETCH_COURSES_CATALOG, FETCH_COURSE_DETAIL, ADD_COURSE, DELETE_COURSE } from '../Action/type';
// import data from '../../Services/data.json'
const initialState = {
    course: [],
    courseCatalog: [],
    courseDetail: null,

}




const Course = (state = initialState, action) => {


    switch (action.type) {
        case FETCH_COURSES: {
            state.course = action.payload
            return { ...state }
        }

        case FETCH_COURSES_CATALOG: {
            state.courseCatalog = action.payload
            return { ...state }

        }

        case FETCH_COURSE_DETAIL: {
            state.courseDetail = action.payload
            return { ...state }

        }

        case ADD_COURSE: {
            let newArr = [...this.state.course];
            newArr.push(action.payload)
            state.course = newArr
            return { ...state }
        }
        case DELETE_COURSE: {
            let newArr = [...state.course]
            newArr = state.course.filter(course => course.maKhoaHoc !== action.payload)
            state.course = newArr
            return { ...state }
        }

        // case FETCH_COURSE_PAGINATION: {
        //     state.coursePagination.items = action.payload.items
        //     state.coursePagination.currentPage = action.payload.currentPage
        //     state.coursePagination.count = action.payload.count
        //     state.coursePagination.totalPages = action.payload.totalPages
        //     return { ...state }
        // }

        default:
            return { ...state }
    }
}
export default Course
