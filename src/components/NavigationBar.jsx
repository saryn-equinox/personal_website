import React from 'react';
import Nav from "./Nav"
import Navbar from 'react-bootstrap/Navbar'

let NavigationBar = props => {
    return (<Navbar fixed={props.fixed} bg={props.bg} variant={props.variant} sticky={props.sticky}>
                <Navbar.Brand
                    href="./index.html" 
                    style={{fontSize: props.brandSize, fontFamily: props.brandFontFamily}}>{props.brand}
                </Navbar.Brand>
                <Nav items={props.items} hasMoto={props.hasMoto}/>
            </Navbar>)
}

export default NavigationBar;