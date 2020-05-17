import React from 'react';
import './Definition.css';
function Definition(props) {
    const style = {
        display: 'inline-block',
        backgroundColor: props.title === "Note" ? 'rgba(189, 131, 44, 0.3)' : 'rgba(113, 22, 189, 0.3)',
        color: 'black',
        padding: 'calc(10px)',
        marginLeft: 'calc(10px)',
        marginRight: 'calc(10px)',
        fontFamily: 'Open Sans, sans-serif'
      }
    return (
        <div className="Definition-box" style={style}>
        <span>
            <strong>{props.title || "Definition"}</strong> {props.children}
        </span>
        </div>
    );
}

export default Definition