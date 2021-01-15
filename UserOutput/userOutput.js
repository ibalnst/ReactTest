import React from 'react';
import './output.css';

const userOutput = (props) => {

    return (
        <div className="output">
            <p>Username : {props.userName}</p>
            <p>Random Text 2</p>
        </div>
    )
}

export default userOutput;