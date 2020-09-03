import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";
import { ContextNav } from "./ContextNav";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) =>
      open ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,1)"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }

  .burger-line {
    background-color: ${(props) =>
      props.posit ? "#222" : ({ open }) => (open ? "#222" : "#fff")};
  }
`;

const Burger = () => {
  const { open, setOpen } = useContext(ContextNav);

  const [headerShow, setHeaderShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollEffect);
  });

  // Scroll effect
  const scrollEffect = () => {
    if (window.scrollY > 70) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  return (
    <>
      <StyledBurger
        style={{
          width: "35px",
        }}
        open={open}
        onClick={() => setOpen(!open)}
        posit={headerShow}
      >
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
