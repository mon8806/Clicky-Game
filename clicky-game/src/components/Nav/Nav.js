    
import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="Nav">
        <a href="/">Dog Chooser</a>
      </li>
      <li>Score: {props.score}</li>

      <li>Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;