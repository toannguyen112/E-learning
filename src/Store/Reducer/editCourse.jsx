const initialState = {

}

 const editCourse =  (state = initialState, { type, payload }) => {
    switch (type) {

    case "EDIT_COURSE":
       return payload

    default:
        return state
    }
}

export default editCourse
