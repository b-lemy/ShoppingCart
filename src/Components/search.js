import React from 'react'
import {Form} from "react-bootstrap";
import {AiOutlineSearch} from "react-icons/ai";
 const Search = () => {
    return(
        <Form className='search'>
            <AiOutlineSearch className='icon'/>
            <Form.Control className='input' type='text' placeholder='search here'></Form.Control>


        </Form>


     )
}
export default Search