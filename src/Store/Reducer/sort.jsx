import { ADD_TO_CART, PAYMENT } from "../Action/type";
import { DELETE_CART } from "../Action/type";
let data = JSON.parse(localStorage.getItem("cart"));
const initialState = data ? data : [];

const Cart = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART: {


        }

        default:
            return state;
    }
};

export default Cart;
