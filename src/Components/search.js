import React from 'react'
import {Form} from "react-bootstrap";
import {AiOutlineSearch} from "react-icons/ai";
import {useCart} from "../Context/context";
 const Search = () => {
     const {dispatch ,searchQuery} =useCart()
     console.log(searchQuery)
    return(
        <Form className='search'>
            <AiOutlineSearch className='icon'/>
            <Form.Control className='input'  onChange={(e) =>
                dispatch({
                    type: "FILTER_BY_SEARCH",
                    payload:e.target.value
                })
            } type='text' placeholder='search here'></Form.Control>


        </Form>


     )
}
export default Search