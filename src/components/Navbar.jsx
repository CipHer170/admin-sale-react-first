import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logoBar">Logo image</div>
      <div className="searchBar">
        <input type="text" />
      </div>
      <div className="user">
        <button>card</button>
        <button>user</button>
      </div>
    </div>
  );
}

export default Navbar;
