import {InitialState} from "./context";

 export const ShoppingReducer = (state = InitialState ,action) =>{
    switch (action.type) {
        case 'ADD_T0_CART':
            const updatedCart = state.cart.concat(action.item);
            return {
                cart: updatedCart,
            }
        case 'REMOVE_FROM_CART':
            return {
                state
            }

        default:
            return state

    }

 }