import React from "react";
// import Jumbotron from 'react-bootstrap/Jumbotron';


let Box = props => {
    return (<div className="box">
        <strong>{props.genre}</strong>
        <h1>{props.title}</h1>
        <p>{props.abstract}</p>
        <p>
            <a href="/">Read More...</a>
        </p>
    </div>)
}

export default Box;