import React from "react";
import Search from "./search";


import {Link} from "react-router-dom";


import {BsFillCartPlusFill} from "react-icons/bs";
import {Badge, Button, Dropdown} from "react-bootstrap";
import {useCart} from "../Context/context";


const NavB = () => {
    const {cart} =useCart()

    return (
        <nav className="nav-index">
            <Link to='/' className="link">Shopping Cart</Link>
            <Search/>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="outline-success">
                    <BsFillCartPlusFill fontSize="23px" /> {cart.length > 0 && <Badge bg="primary">{cart.length}</Badge>}
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">

                    <span style={{padding: 10}}>Cart is empty</span>
                </Dropdown.Menu>
            </Dropdown>
        </nav>
    )
}

export default NavB;