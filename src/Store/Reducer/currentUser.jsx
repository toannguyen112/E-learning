import { SET_CURRENT_USER } from "../Action/type";

const initialState = {};

const currentUser = (state = initialState, { type, payload }) => {
  console.log(payload);
  
  switch (type) {
    case SET_CURRENT_USER:
      state = payload;
      return { ...state };

    default:
      return state;
  }
};

export default currentUser;
