import React from "react";
import Motto from "./Motto";

let Footer = props => {
    return (
        <nav className="navbar justify-content-center navbar-light bg-light">
            <span className="navbar-text mr-auto">{props.footer}</span>
            <Motto mottoContent={props.footerMotto} />
        </nav>)
}
export default Footer;