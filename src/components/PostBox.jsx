import React from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

let PostBox = props => {
    return (<div className="box">
        <strong>{props.genre}</strong>
        <h2>{props.title}</h2>
        <p>{props.abstract}</p>
        <p>
            <Link to="/article">Read More...</Link>
        </p>
    </div>)
}

export default PostBox;