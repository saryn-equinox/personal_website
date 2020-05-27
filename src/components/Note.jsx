import React from "react";

let Note = props => {
    return (<div class="note">
        <p className="note-content">{props.noteContent}</p>
        <p className="note-time">{props.noteTime}</p>
    </div>)
}

export default Note;