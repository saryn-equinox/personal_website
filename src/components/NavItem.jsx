import React from 'react';
import {Link} from "react-router-dom";

let NavItem = props => {
    return (<li className="nav-item" key={props.id}>
        <Link className="nav-link" to={props.path}>{props.name}</Link>
    </li>)
}

export default NavItem;