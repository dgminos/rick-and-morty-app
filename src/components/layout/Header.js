import React from "react";
import "../layout.css";

const Header = ({ brand }) => {
  return (
    <nav className="navbar header ">
      <div className="container ">
        <a className="navbar-brand" href="/">
          {brand}
        </a>
        <img
          src="https://media.giphy.com/media/UvDcnQCKu0Mwanoygf/giphy.gif"
          alt="Rick and Morty"
          width="80"
          height="80"
        ></img>
      </div>
    </nav>
  );
};

export default Header;
