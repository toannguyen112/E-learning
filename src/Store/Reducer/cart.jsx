import { ADD_TO_CART } from "../Action/type";
import { DELETE_CART } from '../Action/type'
let data = JSON.parse(localStorage.getItem("cart"))
const initialState = data ? data : [];

const Cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {

      let cartUpdate = [...state];
      let index = cartUpdate.findIndex(sp => sp.maKhoaHoc === payload.maKhoaHoc);

      if (index === -1) {
        cartUpdate = [...cartUpdate, payload]
      } else {
        return cartUpdate
      }
      localStorage.setItem("cart", JSON.stringify(cartUpdate));
      return cartUpdate;




    }
    case DELETE_CART: {
      let cartUpdate = [...state]
      let index = cartUpdate.findIndex(item => item.maKhoaHoc === payload.maKhoaHoc)
      cartUpdate.splice(index, 1)
      state = cartUpdate
      localStorage.setItem("cart", JSON.stringify(cartUpdate));
      return [...state]
    }

    default:
      return state;
  }
};

export default Cart;
