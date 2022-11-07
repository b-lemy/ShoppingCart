import React, {Fragment} from "react";
import {useContext} from "react";
import {ShoppingContext} from "../Context/context";

import NavB from "./navbar";
import Filter from "./filter";
import Display from "./display";
import {Col, Row} from "react-bootstrap";

const Home = () => {
    return (
        <Fragment>
            <NavB/>
            <Row>
                <Col xs={3} >
                    <Filter/>
                </Col>
                <Col xs={9}>
                    <Display/>
                </Col>
            </Row>



        </Fragment>
    )
}

export default Home