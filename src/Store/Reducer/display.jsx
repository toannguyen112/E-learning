
import {SEARCH_COURSES} from "../Action/type"
const initialState = {
    searchKeyword : ""
}

const display = (state = initialState, { type, payload }) => {
    switch (type) {

        case SEARCH_COURSES:
            state.searchKeyword =  payload;
            return {...state}
           
        default:
            return state
    }
}

export default display
