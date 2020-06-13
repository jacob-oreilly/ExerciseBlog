import React from "react";
import Navbar from "../Navbar/navbar";
import "./header.css";

function Header() {
  return (
    <div className="container">
      <h1>Hashbrown fitness</h1>
      <Navbar></Navbar>
    </div>
  );
}

export default Header;
