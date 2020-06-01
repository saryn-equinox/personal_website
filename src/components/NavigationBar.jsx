import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

let NavigationBar = props => {
    return (<nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top">
            <Link className="navbar-brand" to="/" id="webBrand">{props.brandName}</Link>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
            <span className="navbar-text motto">
                <em>{props.mottoContent}</em>
            </span>
            </nav>);
}

export default NavigationBar;