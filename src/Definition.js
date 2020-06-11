import React from 'react';

function Definition(props) {

    const bg_color = {"Note" : "#ba1626", undefined : "#7116bd"}

    const spanStyle = {
        lineHeight: "1.5",
        color: bg_color[props.title]
    }

    const textStyle = {
        background: bg_color[props.title],
        marginRight: "5px",
        display: "inline-block",
        lineHeight: "1.2",
        color: "white",
        padding: "3px 6px"

    }
    return (
        <div>
        <span style={spanStyle}>
            <span style={textStyle}>{props.title || "Definition"}</span> {props.children}
        </span>
        </div>
    );
}

export default Definition