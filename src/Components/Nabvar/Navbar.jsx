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
            <Link to="/signin" className={style.NavLink}>
              Signin
            </Link>
          </li>
          <li>
            <Link to="/signup" className={style.NavLink}>
              Signup
            </Link>
          </li>
          <li>
            <Link to="/Catergories" className={style.NavLink}>
              Catergories
            </Link>
          </li>

          <li>
            <Link to="/Products" className={style.NavLink}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/Cart" className={style.NavLink}>
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
