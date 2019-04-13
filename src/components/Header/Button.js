import React from "react";
import styled, { css } from "react-emotion";

const btn = ({ isOpen }) => css`
  z-index: 100;
  font-size: 0.75rem;
  transition: opacity 300ms ease, transform 300ms ease, color 300ms ease;
  @media only screen and (min-width: 800px) {
    display none;
  }
`;

const btnContainer = css`
  position: relative;
  width: 45px;
  height: 42px;
  transition: opacity 300ms ease, transform 300ms ease;
  display: inline-block;
`;

const btnSlice = css`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
  width: 25px;
  margin-left: 10px;
  transform-origin: 50%;
  transition: opacity 300ms ease, transform 300ms ease;
  height: 3px;
  background-color: #ffffff;
  display: block;
`;

const btnTop = ({ isOpen }) =>
  css`
    transform: ${isOpen
      ? "translate3d(0, calc(-50%), 0) rotate(-45deg);"
      : "translate3d(0, calc(-50% - 8px), 0)"};
  `;
const btnMiddle = ({ isOpen }) =>
  css`
    transform: translate3d(0, -50%, 0);
    opacity: ${isOpen ? 0 : 1};
  `;
const btnBottom = ({ isOpen }) =>
  css`
    transform: ${isOpen
      ? "translate3d(0, calc(-50%), 0) rotate(45deg);"
      : "translate3d(0, calc(-50% + 8px), 0)"};
  `;

const Button = styled("a")(btn);
const ButtonWrap = styled("span")(btnContainer);
const TopBun = styled("span")(btnTop);
const Meat = styled("span")(btnMiddle);
const BottomBun = styled("span")(btnBottom);

export default ({ isOpen, onClick }) => (
  <Button href="#0" isOpen={isOpen} onClick={onClick}>
    <span className="visually-hidden">{isOpen ? "close nav" : "open nav"}</span>

    <ButtonWrap>
      <TopBun isOpen={isOpen} className={`${btnSlice}`} />
      <Meat isOpen={isOpen} className={`${btnSlice}`} />
      <BottomBun isOpen={isOpen} className={`${btnSlice}`} />
    </ButtonWrap>
  </Button>
);
