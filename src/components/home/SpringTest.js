import React from "react";
import { useSpring, animated } from "react-spring";

const SpringTest = () => {
  const props = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <animated.div style={props}>
      <div style={c1Style}>
        <h1>Component1</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </animated.div>
  );
};

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem",
};

export default SpringTest;
