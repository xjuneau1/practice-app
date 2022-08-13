import React, { useState } from "react";
import "./Content.css";

function Content({ color, setColor }) {
  const initColors = [
    "lightblue",
    "red",
    "#ff45e8",
    "rgb(255,100,50,230)",
    "coral",
    "darkgreen",
  ];
  const [colorText, setColorText] = useState("");

  const handleChangeColor = (event) => {
    const randomIndex = Math.floor(Math.random() * 6);
    setColor(initColors[randomIndex]);
    setColorText(color);
    const body = event.target.parentNode.parentNode.parentNode.parentNode;
    body.style.backgroundColor = color;
  };

  return (
    <div className="content-container">
      <p>Current Color: {colorText}</p>
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
}

export default Content;
