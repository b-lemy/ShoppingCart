import React from "react";
import SingleProduct from "./singleProduct";
import {useCart} from "../Context/context";

const Display = () => {


    const {AddItemToCartHandler,RemoveItemToCartHandler,products, byStock, byFastDelivery, byRating, searchQuery, dispatch, sort} =useCart()

    const transformedProducts = () => {
        let sortedProducts =products;

        if(sort){
            sortedProducts =sortedProducts.sort((a,b) => sort === "lowToHigh"?a.price -b.price : b.price -a.price)
        }
        if(!byStock){
            sortedProducts =sortedProducts.filter((item) => item.inStock)
        }
        if(byFastDelivery){
            sortedProducts =sortedProducts.filter((item) => item.fastDelivery)
        }
        if(byRating){
            sortedProducts =sortedProducts.filter((item) => item.rating >= byRating)
        }
        if(searchQuery){
            sortedProducts =sortedProducts.filter((item) => item.name.toLowerCase().includes(searchQuery))
        }

        return sortedProducts
    }

    return (
        <div className="contain">
            {transformedProducts().map((item)=>{
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