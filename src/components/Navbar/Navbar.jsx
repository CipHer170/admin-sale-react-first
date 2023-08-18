import React from "react";
import "../Navbar/navbar.scss";
import logoImage from "../../assets/logo_img.svg";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import BaseContainer from "../BaseContainer/BaseContainer";
function Navbar() {
  return (
    <BaseContainer>
      <div className="navbar">
        <div className="logoBar">
          <img src={logoImage} alt="logo" />
          <h2>Name of company</h2>
        </div>
        <div className="searchBar">
          <input type="text" placeholder="Search" id="search" />
          <label htmlFor="search">
            <CiSearch />
          </label>
        </div>
        <div className="user">
          <Link>
            <FiShoppingBag />
          </Link>
          <Link>
            <FaUserCircle />
          </Link>
        </div>
      </div>
    </BaseContainer>
  );
}

export default Navbar;
