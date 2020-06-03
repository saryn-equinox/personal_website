import React from 'react';

let Motto = props => {
    return (<span className="navbar-text motto">
            <em>{props.mottoContent}</em>
        </span>)
}

export default Motto;