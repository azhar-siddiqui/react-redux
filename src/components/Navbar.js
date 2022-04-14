import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  console.log(props.data);
  return (
    <nav className="nav__container">
      <Link to="/">Logo</Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart {props.data.length}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
