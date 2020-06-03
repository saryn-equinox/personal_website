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
                <p><strong>{props.genre}</strong></p>
                <h1>{props.title}</h1>
                <p>{props.abstract}</p>
                <p>
                    <Link to="/article">Read More...</Link>
                </p>
        </div>)
}

export default PostBox;