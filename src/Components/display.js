import React from "react";
import SingleProduct from "./singleProduct";
import {useCart} from "../Context/context";

const Display = () => {
    const shop = useCart()

    const CartHandler = (item) => {
        shop.AddItem(item)
    }
    return (
        <div className="contain">
            {shop.product.map((item)=>{
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
                        handler = {CartHandler.bind(null,item)}
                    />

                )
            })}

        </div>
    )
}

export default Display;