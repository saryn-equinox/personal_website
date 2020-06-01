import React from "react";

let Footer = props => {
    return (
        <nav className="navbar justify-content-center navbar-light bg-light">
            <span className="navbar-text mr-auto">{props.footer}</span>
            <span className="navbar-text motto"><em>{props.footerMotto}</em></span>
        </nav>)
}
export default Footer;