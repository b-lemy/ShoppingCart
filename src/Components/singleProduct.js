import React from "react";
import {Button, Card} from "react-bootstrap";
import Rating from "./rating";
import {useCart} from "../Context/context";

const SingleProduct = ({id, name, image, price, fastDelivery, rating, stock , add ,remove}) => {
    const GlobalState = useCart()

    return (
        <Card className="card">
            <Card.Img variant="top" src={image}/>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>Tsh {price.split(".")[0]}
            </Card.Subtitle>
            <span>
                {fastDelivery ? <div>Fast Delivery</div> : <div>Delivery in 4 days</div>}
            </span>
            <Rating rating={rating}/>
            {GlobalState.cart.some((p) => p.id === id) ?
                <Button  variant="danger" onClick={remove}> Remove from Cart</Button> :
                <Button disabled={!stock}
                         onClick={add}
                        variant="primary">{!stock ? "Out of Stock" : "Add to cart"}</Button>
            }


        </Card>
    )
}


export default SingleProduct