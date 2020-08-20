import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ContextNav } from "./ContextNav";

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-right: 10%;

  @media (max-width: 849px) {
    margin-right: 0%;
  }

  a {
    margin-top: 0.7rem;
    padding: 3px 20px;
    color: ${(props) => (props.posit ? "#000" : "#fff")};
    text-decoration: none;
    font-size: 20px;
    transition: all 0.4s ease-in-out;
    border-radius: 6px;
    text-transform: uppercase;
    font-family: "Itim", cursive;
    font-weight: 600;
  }

  a:hover {
    color: rgb(18, 18, 225);
  }

  @media (max-width: 768px) {
    margin-right: 0rem;
    flex-flow: column nowrap;
    background-color: rgba(16, 66, 143, 0.6);
    z-index: 19;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.4rem;
    transition: transform 0.3s ease-in-out;

    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;

const RightNav = () => {
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
  const { open, setOpen } = useContext(ContextNav);
  return (
    <UL posit={headerShow} open={open}>
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
