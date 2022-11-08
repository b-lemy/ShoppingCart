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
        case 'SORT_BY_PRICE':
            return {
                ...state,
                sort:action.payload
            }
        case 'FILTER_BY_STOCK':
            return {
                ...state,
                byStock : !state.byStock
            }
        case 'FILTER_BY_DELIVERY':
            return {
                ...state,
                byFastDelivery : !state.byFastDelivery
            }
        case 'FILTER_BY_RATING':
            return {
                ...state,
                byRating : action.payload
            }
        case 'FILTER_BY_SEARCH':
            return {
                ...state,
                searchQuery : action.payload
            }
        case 'CLEAR_FILTER':
            return {
                ...state,
                byStock:false,
                byFastDelivery:false,
                byRating:0,
                searchQuery:""
            }
        default:
            return state

    }

}