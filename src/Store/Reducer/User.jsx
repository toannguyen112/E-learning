import { FETCH_USER, ADD_USER, DELETE_USER, UPDATE_USER } from "../Action/type"

const initialState = []

const user = (state = initialState, { type, payload }) => {
    switch (type) {

        case FETCH_USER:
            state = payload
            return [...state]
        case ADD_USER: {
            state.push(payload)
            return [...state]
        }

        case DELETE_USER: {
            let newArr = [...state]
            newArr = state.filter(user => user.taiKhoan !== payload)
            state = newArr
            return [...state]
        }
        case UPDATE_USER: {
            let newArr = [...state]
            let index = newArr.findIndex(item => item.taiKhoan === payload.taiKhoan);
            newArr[index] = payload
            state = newArr
            return [...state]
        }

        default:
            return state
    }
}

export default user
