import React, { useContext } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";
import { ContextNav } from "./ContextNav";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
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
`;

const Burger = () => {
  const { open, setOpen } = useContext(ContextNav);

  return (
    <>
      <StyledBurger
        style={{ backgroundColor: "rgba(16, 66, 143, 1)", width: "45px" }}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div style={{ backgroundColor: "#fff", margin: "2px 6px" }}></div>
        <div style={{ backgroundColor: "#fff", margin: "2px 6px" }}></div>
        <div style={{ backgroundColor: "#fff", margin: "2px 6px" }}></div>
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
