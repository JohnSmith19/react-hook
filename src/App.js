import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./useState/Counter";
import Info from "./useState/Info";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Info />
          <Counter />
        </header>
      </div>
    );
  }
}

export default App;