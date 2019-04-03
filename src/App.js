import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./useState/Counter";
import InfoEffect from "./useEffect/InfoEffect";
import ContextSample from "./useContext/ContextSample";

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
        {visible && <InfoEffect />}
        <Counter />
      </header>
      <ContextSample />
    </div>
  );
};

export default App;
