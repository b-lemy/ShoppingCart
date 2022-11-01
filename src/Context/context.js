import {createContext, useContext, useReducer} from "react";
import {ShoppingReducer} from "./reducer";
import {faker} from "@faker-js/faker";

const Products =[...Array(20)].map(()=>({
    id:faker.datatype.uuid(),
    name:faker.commerce.productName(),
    price:faker.commerce.price(),
    image:faker.image.image(),
    inStock:faker.helpers.arrayElement([0,3,5,6,7]),
    fastDelivery:faker.datatype.boolean(),
    rating:faker.helpers.arrayElement([1,2,3,4,5])
}))

export  const  InitialState = {
    cart: [],
    product:Products,

}

export const ShoppingContext = createContext(InitialState)


export const ShoppingProvider = ({children}) => {
   const[state ,dispatch] =useReducer(ShoppingReducer ,InitialState);

   const AddItemToCartHandler = (item) =>{
       dispatch({
           type:'ADD_T0_CART',
           item:item
       })


   }




    const ShoppingCont = {
        product:state.product,
        cart:state.cart,
        AddItem:AddItemToCartHandler
    }

    return (
        <ShoppingContext.Provider value={ShoppingCont}>
            {children}

        </ShoppingContext.Provider>
    )
}


 export const useCart = () =>{
    const shop = useContext(ShoppingContext)
     return shop

 }





