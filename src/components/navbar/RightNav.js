import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const RightNav = (props) => {
  return (
    <UL open={props.open}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/activities">Activities</Link>
      <Link to="/newsletter">NewsLetter</Link>
      <Link to="/contact">Contact</Link>
    </UL>
  );
};

export default RightNav;
