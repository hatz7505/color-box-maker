import React from "react";

function Box({ color, height, width }) {
  let pxHeight = height + "px";
  let pxWidth = width + "px";
  return (
    <div
      className="box" style={{ backgroundColor: color, height: pxHeight, width: pxWidth }}
    >
      I'm a {color} box!
    </div>
  );
}

export default Box;

