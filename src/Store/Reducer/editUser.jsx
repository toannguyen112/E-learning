const initialState = {

}

const edituser = (state = initialState, { type, payload }) => {
    switch (type) {

        case "USER_PROFILE":
            
            state = payload
            return { ...state }
        case "EDIT_USER": {
            state = payload
            return { ...state }
        }
        default:
            return state
    }
}

export default edituser
