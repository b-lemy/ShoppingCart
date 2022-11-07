import {InitialState} from "./context";

export const ShoppingReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'ADD_T0_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case 'REMOVE_T0_CART':
            return {
               ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }

        default:
            return state

    }

}