import React from "react";
import { Link } from "gatsby";
import logo from "../img/harp-clipart.png";

const Navbar = props => (
  <header className="c-header">
    <nav className="navbar is-transparent">
      <div className="c-header__lower">
        <div className="c-header__lower-start">
          <Link to="/">
            <img src={logo} alt="Home" className="c-header__logo" />
          </Link>
        </div>
        <div className="c-header__lower-end">
          <Link
            className="underline--magical hover hover-1"
            activeClassName="active"
            to="/en/about/"
          >
            About
          </Link>
          <Link
            className="hover hover-1"
            activeClassName="active"
            to="/en/events/"
          >
            Events
          </Link>
          <Link
            className="hover hover-1"
            activeClassName="active"
            to="/en/albums/"
          >
            Albums
          </Link>
          <Link
            className="hover hover-1"
            activeClassName="active"
            to="/en/press/"
          >
            Press
          </Link>
          <Link
            className="hover hover-1"
            activeClassName="active"
            to="/en/contact/"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;
