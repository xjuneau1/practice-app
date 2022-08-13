import React from "react";
import "./Navbar.css";

function Navbar() {
  let elements = {
    title: "Color Changer",
    home: "RGB",
    about: "HEX",
    projects: "By Name",
  };

  return (
    <nav>
      <span>
        <h2>{elements.title}</h2>
      </span>
      <ul>
        <li>
          <button>{elements.home}</button>
        </li>
        <li>
          <button>{elements.projects}</button>
        </li>
        <li>
          <button>{elements.about}</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
