import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/useReducer/Counter";
import Info from "./components/useReducer/Info";
import ContextSample from "./components/useContext/ContextSample";
import Average from "./components/useMemo/Average";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "invisible" : "visible"}
        </button>
        {visible && <Info />}
        <Counter />
        <Average />
      </header>
      <ContextSample />
    </div>
  );
};

export default App;
