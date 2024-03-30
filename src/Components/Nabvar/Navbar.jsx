/* eslint-disable no-unused-vars */
import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={style.bg}>
      <div>
        <ul>
          <li>
            <Link to="/signin" className="nav-link">
              Signin
            </Link>
          </li>
          <li>
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </li>
          <li>
            <Link to="/Catergories" className="nav-link">
              Catergories
            </Link>
          </li>

          <li>
            <Link to="/Products" className="nav-link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/Cart" className="nav-link">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
