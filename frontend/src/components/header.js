import React from "react";
import logo from "../assets/CatwikiLogo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to='/'>
        <img src={logo} alt="catwiki logo" />
      </Link>
    </div>
  );
};

export default Header;
