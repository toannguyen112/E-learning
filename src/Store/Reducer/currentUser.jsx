import { LOGIN } from "../Action/type"

const initialState = {

}

const currentUser = (state = initialState, { type, payload }) => {
    switch (type) {

        case LOGIN:
            state = payload
            return {...state}



            

        default:
            return state
    }
}

export default currentUser
