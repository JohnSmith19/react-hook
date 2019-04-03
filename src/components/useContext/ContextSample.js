import React, { createContext, useContext } from "react";

const ThemeContext = createContext("black");
const ContextSample = () => {
  const theme = useContext(ThemeContext);
  const style = {
    with: "24px",
    height: "24px",
    background: theme
  };
  return <div style={style} />;
};

export default ContextSample;
