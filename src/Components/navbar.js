import React from "react";
import Search from "./search";


import {Link} from "react-router-dom";


import {BsFillCartPlusFill} from "react-icons/bs";
import {Badge, Button, Dropdown} from "react-bootstrap";
import {useCart} from "../Context/context";


const NavB = () => {
    const {cart} = useCart()


    return (
        <nav className="nav-index">
            <Link to='/' className="link">Shopping Cart</Link>
            <Search/>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="outline-success">
                    <BsFillCartPlusFill fontSize="23px"/> {cart.length > 0 && <Badge bg="primary">{cart.length}</Badge>}
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                    {cart.length > 0
                        ? <span>{cart.map((item) =>{
                            return (
                                <ul key={item.id}>
                                    <li>{ item.name}</li>
                                    <li>{ item.price}</li>
                                </ul>
                            )})}
                            Total: Tsh {cart.reduce((acc ,cur) =>acc + +(cur.price),0)}
                    </span>: <span style={{padding: 10}}>Cart is empty</span>
                    }


                </Dropdown.Menu>
            </Dropdown>
        </nav>
    )
}

export default NavB;