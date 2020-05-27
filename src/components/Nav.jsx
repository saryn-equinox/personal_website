import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Motto from "./Motto";

let NavItem = props => {
    return (
        <Nav>
            {Object.entries(props.items).map((val, idx) => {
                let name = val[0];
                let page = val[1];
                if (page)  {
                    return (<Nav.Item key={idx}>
                        <Nav.Link href={`./${page}`} key={idx}>{name}</Nav.Link>
                    </Nav.Item>);
                } else {
                    return (<Nav.Item key={idx}>
                        {name}
                    </Nav.Item>)};
                }) 
            }          
            {props.hasMoto && <Motto />}
        </Nav>)
}

export default NavItem;