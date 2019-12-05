import {FETCH_COURSES} from '../Action/type'
const initialState = []



const Course = (state = initialState, { type, payload }) => {
   
    switch (type) {
        case FETCH_COURSES: {
            
            state = payload
            return [...state]
        }


        default:
            return state
    }
}
export default Course
