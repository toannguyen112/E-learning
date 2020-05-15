import {

    SORT_PRICE_HIGH_TO_LOW,
    SORT_PRICE_LOW_TO_HIGH,
    SORT_NAME_HIGH_TO_LOW,
    SORT_NAME_LOW_TO_HIGH,
} from "../Action/type";
const initialState = 1

export default (state = initialState, action) => {
    switch (action.type) {

        case SORT_PRICE_LOW_TO_HIGH: {
            return action.payload

        }
        case SORT_PRICE_HIGH_TO_LOW: {
            return action.payload

            // let newArr = [...state.course];
            // newArr.sort((a, b) => {
            //   return b.price - a.price;
            // });

            // state.course = newArr;
            // return { ...state };
        }
        case SORT_NAME_HIGH_TO_LOW: {
            return action.payload
            // let newArr = [...state.course];
            // newArr.sort((a, b) => {
            //   var nameA = a.tenKhoaHoc.toUpperCase();
            //   var nameB = b.tenKhoaHoc.toUpperCase();
            //   if (nameA < nameB) {
            //     return -1;
            //   }
            //   if (nameA > nameB) {
            //     return 1;
            //   }

            //   return 0;
            // });

            // state.course = newArr;
            // return { ...state };
        }
        case SORT_NAME_LOW_TO_HIGH: {
            return action.payload
            // let newArr = [...state.course];
            // newArr.sort((a, b) => {
            //   var nameA = a.tenKhoaHoc.toUpperCase();
            //   var nameB = b.tenKhoaHoc.toUpperCase();
            //   if (nameA > nameB) {
            //     return -1;
            //   }
            //   if (nameA < nameB) {
            //     return 1;
            //   }

            //   return 0;
            // });

            // state.course = newArr;
            // return { ...state };
        }

        default:
            return state
    }
}
