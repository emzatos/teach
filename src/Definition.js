import React from 'react';
function Definition(props) {

      const spanStyle = {
        lineHeight: "1.5",
        color: props.title === "Note" ? "#ba1626" : "rgb(113, 22, 189)"
      }

      const textStyle = {
          background: props.title === "Note" ? "#ba1626" : "rgb(113, 22, 189)",
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