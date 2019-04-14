import React, { Component, Fragment } from "react";
import { css } from "emotion";
import Nav from "./Nav";
import Button from "./Button";
import logo from "../../img/harp-clipart.png";

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media only screen and (min-width: 800px) {
    align-items: center;
  }
`;

const homeLogoStyle = css`
  position: relative;
  z-index: 100;
`;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onClick = e => {
    e.preventDefault();
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <header className={`${headerStyle} c-header`} style={isOpen ? {overflow: 'visible'} : {overflow: 'hidden', animation: '5s delay-overflow'}}>
        <div className="wrapper c-header-inner">
          <div>
            <a href="/" className={`${homeLogoStyle}`}>
              <img src={logo} alt="Home" style={{ width: "40px" }} />
            </a>
          </div>
          <div>
            <Nav isOpen={isOpen} onClick={this.onClick} />
            <Button
              isOpen={isOpen}
              onClick={this.onClick}
              className="toggle-btn"
            />
          </div>
        </div>
      </header>
    );
  }
}
