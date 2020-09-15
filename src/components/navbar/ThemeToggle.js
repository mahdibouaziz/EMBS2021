import React, { useState } from "react";
import styled from "styled-components";

const Toggle = styled.div`
  position: relative;
  height: 25px;
  width: 50px;
  border-radius: 12.5px;
  background-image: ${(props) =>
    props.toggled
      ? "linear-gradient(midnightblue, rebeccapurple)"
      : "linear-gradient(#0fb7f1, #2383ab)"};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-left: 1.2rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Notch = styled.div`
  height: 22.5px;
  width: 22.5px;
  border-radius: 50%;
  background: ${(props) => (props.toggled ? "whitesmoke" : "whitesmoke")};
  position: absolute;
  top: 1.25px;
  left: 1.25px;
  box-shadow: 0 0 1.25px yellow;
  z-index: 2;
  transform: ${(props) =>
    props.toggled ? "translate(25px, 0)" : "translate(0, 0)"};
  transition: all 0.3s ease-in-out;
`;

const ShapeSm = styled.div`
  position: absolute;
  background: ${(props) => (props.toggled ? "lightgrey" : "whitesmoke")};
  box-shadow: ${(props) => (props.toggled ? "0 0 2.5px .5px violet" : null)};
  border-radius: 50%;
  top: 50%;
  left: 60%;
  height: 1.25px;
  width: ${(props) => (props.toggled ? "1.25px" : "8px")};
  transform: ${(props) =>
    props.toggled ? "translate(-10px, 0)" : "translate(5px, 0)"};
  transition: all 0.3s ease-in-out;
`;
const ShapeMd = styled.div`
  position: absolute;
  background: ${(props) => (props.toggled ? "lightgrey" : "whitesmoke")};
  box-shadow: ${(props) => (props.toggled ? "0 0 2.5px .5px violet" : null)};
  border-radius: 50%;
  height: 2px;
  width: ${(props) => (props.toggled ? "2px" : "11px")};
  transform: ${(props) =>
    props.toggled ? "translate(-6px, 0)" : "translate(4px, 0)"};
  top: 25%;
  left: 30%;
  z-index: 3;
  transition: all 0.3s ease-in-out;
`;
const ShapeLg = styled.div`
  position: absolute;
  background: ${(props) => (props.toggled ? "lightgrey" : "whitesmoke")};
  box-shadow: ${(props) => (props.toggled ? "0 0 2.5px .2px violet" : null)};
  border-radius: 50%;
  height: 3px;
  width: ${(props) => (props.toggled ? "3px" : "12px")};
  transform: ${(props) =>
    props.toggled ? "translate(-3.75px, 0)" : "translate(4px, 0)"};
  bottom: 6.25px;
  left: 30%;
  transition: all 0.3s ease-in-out;
`;

const ThemeToggle = (props) => {
  const { themeToggler } = props;
  const [toggled, setToggled] = useState(false);
  const handleClick = () => {
    setToggled(!toggled);
    themeToggler();
  };

  return (
    <Toggle onClick={handleClick} toggled={toggled}>
      <Notch toggled={toggled}></Notch>
      <ShapeSm toggled={toggled}></ShapeSm>
      <ShapeMd toggled={toggled}></ShapeMd>
      <ShapeLg toggled={toggled}></ShapeLg>
    </Toggle>
  );
};

export default ThemeToggle;
