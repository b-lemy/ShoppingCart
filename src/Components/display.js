import React from "react";
import SingleProduct from "./singleProduct";
import {useCart} from "../Context/context";

const Display = () => {

    const GlobalState = useCart()
    const {AddItemToCartHandler,RemoveItemToCartHandler} =useCart()

    return (
        <div className="contain">
            {GlobalState.products.map((item)=>{
                return (
                    <SingleProduct
                        key={item.id}
                        id ={item.id}
                        name = {item.name}
                        image={item.image}
                        price = {item.price}
                        fastDelivery = {item.fastDelivery}
                        rating = {item.rating}
                        stock = {item.inStock}
                        add={() => AddItemToCartHandler(item)}
                        remove={() =>RemoveItemToCartHandler(item)}


                    />

                )
            })}

        </div>
    )
}

export default Display;