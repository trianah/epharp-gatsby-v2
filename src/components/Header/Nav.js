import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'react-emotion'

const navStyle = ({ isOpen }) => css`
  transform: ${isOpen ? 'translate3d(0, 0, 0);' : 'translate3d(100%, 0, 0);'};
  transition: opacity 300ms ease, transform 300ms ease;
  position absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  background-color: #000000;
  color: #ffffff;

  ul {
    list-style: none;
    margin: 5rem 0 0;
    padding: 0;
    text-align: center;
    width: 100%;
    @media only screen and (min-width: 800px) {
      display: flex;
      margin-top: 0;
    }

    li {
      font-size: 1.3rem;
      @media only screen and (min-width: 800px) {
        font-size: 1rem;
      }
    }

    li + li {
      margin-top: 1rem;
      @media only screen and (min-width: 800px) {
        margin-top: 0;
        margin-left: 1.6rem;
      }
    }
  }
  @media only screen and (min-width: 800px) {
    position: static;
    transform: translate3d(0, 0, 0);
    min-height: auto;
    background-color: transparent;
    color: white;
  }
`

const Nav = styled('nav')(navStyle)

export default ({ isOpen }) => (
  <Nav isOpen={isOpen}>
    <div className="zzzc-header">
      <nav className="navbar is-transparent">
        <div className="zzzc-header__lower">
          <div className="zzzc-header__lower-end">
            <ul>
              <li>
                <Link
                  className="menu-link hover-1"
                  activeClassName="active"
                  to="/en/about/"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="menu-link hover-1"
                  activeClassName="active"
                  to="/en/events/"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  className="menu-link hover-1"
                  activeClassName="active"
                  to="/en/albums/"
                >
                  Albums
                </Link>
              </li>
              {/* <li>
                <Link
                  className="menu-link hover-1"
                  activeClassName="active"
                  to="/en/press/"
                >
                  Press
                </Link>
              </li> */}
              <li>
                <Link
                  className="menu-link hover-1"
                  activeClassName="active"
                  to="/en/contact/"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </Nav>
)
