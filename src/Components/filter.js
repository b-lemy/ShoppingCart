import React, {useState} from "react";
import {Button, FormCheck} from "react-bootstrap";
import Rating from "./rating";
import {useCart} from "../Context/context";

const Filter = () => {
    const {byStock, byFastDelivery, byRating, searchQuery, dispatch, sort} = useCart()
    console.log(byStock)

    return (
        <div className='filter'>
           <span>
               <FormCheck
                   inline
                   label="Ascending"
                   type="radio"
                   name="group1"
                   onChange={() =>
                       dispatch({
                           type: "SORT_BY_PRICE",
                           payload: "lowToHigh"
                       })
                   }
                   checked={sort === "lowToHigh" ? true : false}
               />
           </span>
            <span>
               <FormCheck
                   inline
                   label="Descending"
                   type="radio"
                   name="group1"
                   onChange={() =>
                       dispatch({
                           type: "SORT_BY_PRICE",
                           payload: "highToLow"
                       })
                   }
                   checked={sort === "highToLow" ? true : false}
               />

           </span>
            <span>
              <FormCheck
                  inline
                  label="Include Out of Stock"
                  type="checkbox"
                  name="group1"
                  onChange={() =>
                      dispatch({
                          type: "FILTER_BY_STOCK",
                      })
                  }
                  checked={byStock}
              />
           </span>
            <span>
               <FormCheck
                   inline
                   label="Fast Delivery Only"
                   type="checkbox"
                   name="group1"
                   onChange={() =>
                       dispatch({
                           type: "FILTER_BY_DELIVERY",
                       })
                   }
                   checked={byFastDelivery}
               />
           </span>
            <span className="rating">
                <label style={{marginRight: 10}}>Rating :</label>
                <Rating rating={byRating}
                        onClick={(i) =>
                            dispatch({
                                type: "FILTER_BY_RATING",
                                payload: i + 1
                            })
                        }
                        style={{cursor: "pointer"}}/>
            </span>

            <Button variant="light" style={{width: '80%'}} onClick={() => dispatch({type: "CLEAR_FILTER"})}>Clear
                Filters</Button>
        </div>
    )
}
export default Filter