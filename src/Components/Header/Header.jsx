import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="topnav">
      <div className="Reactnews">
        <h2>React News </h2>
      </div>
      <div>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/form">Form</Link>
        </span>
        <span>
          <Link to="/news">News</Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
