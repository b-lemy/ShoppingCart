import React, {useState} from "react";
import {Button, FormCheck} from "react-bootstrap";
import Rating from "./rating";

const Filter = () => {
    const [rate ,setRate] =useState(3)

    return (
        <div className='filter'>
           <span>
               <FormCheck
                   inline
                   label="Ascending"
                   type="radio"
                   name="group1"
               />
           </span>
            <span>
               <FormCheck
                   inline
                   label="Descending"
                   type="radio"
                   name="group1"
                   />

           </span>
            <span>
              <FormCheck
                  inline
                  label="Include Out of Stock"
                  type="checkbox"
                  name="group1"
              />
           </span>
            <span>
               <FormCheck
                   inline
                   label="Fast Delivery Only"
                   type="checkbox"
                   name="group1"
               />
           </span>
            <span className="rating">
                <label style={{marginRight:10}}>Rating :</label>
                <Rating rating={rate}
                        onClick = {(i) => setRate(i + 1)}
                        style={{cursor:"pointer"}}/>
            </span>

            <Button variant="light" style={{width:'80%'}}>Clear Filters</Button>
</div>
    )
}
export default Filter