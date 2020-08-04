import React, { createContext, useState } from "react";

export const ContextNav = createContext();

const ContextNavProvider = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <ContextNav.Provider value={{ open, setOpen }}>
      {props.children}
    </ContextNav.Provider>
  );
};

export default ContextNavProvider;
