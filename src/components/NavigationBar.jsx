import React from 'react';
import NavItem from "./NavItem";
import Motto from "./Motto";
import {
    useRouteMatch,
    useParams,
    Link
} from "react-router-dom";

let NavigationBar = props => {
    return (<nav className={`navbar navbar-expand-sm navbar-light bg-light ${props.position} ${props.type}`}>
            <Link className="navbar-brand" to="/" id="webBrand">{props.brandName}</Link>
                <ul className="navbar-nav mr-auto">
                {Object.entries(props.navBarItems).map((val, idx) => {
                    const name = val[0];
                    const path = val[1];
                    return <NavItem name={name} path={path} id={idx}/>
                })}
                </ul>
            <Motto mottoContent={props.mottoContent} />
            </nav>);
}

export default NavigationBar;