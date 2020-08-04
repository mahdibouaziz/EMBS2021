import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ContextNav } from "./ContextNav";

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  a {
    padding: 20px 20px;
    color: #333;
    text-decoration: none;
    font-size: 20px;
    transition: all 0.4s ease-in-out;
    border-radius: 6px;
  }

  a:hover {
    background: #ccc;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.4rem;
    transition: transform 0.3s ease-in-out;

    a {
      color: #333;
      text-decoration: none;
    }
  }
`;

const RightNav = () => {
  const { open, setOpen } = useContext(ContextNav);
  return (
    <UL open={open}>
      <Link onClick={() => setOpen(!open)} to="/">
        Home
      </Link>
      <Link onClick={() => setOpen(!open)} to="/about">
        About
      </Link>
      <Link onClick={() => setOpen(!open)} to="/activities">
        Activities
      </Link>
      <Link onClick={() => setOpen(!open)} to="/newsletter">
        NewsLetter
      </Link>
      <Link onClick={() => setOpen(!open)} to="/contact">
        Contact
      </Link>
    </UL>
  );
};

export default RightNav;
