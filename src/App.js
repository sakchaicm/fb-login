import React, { Component } from "react";
import logo from "./facebook_icon.svg";
import "./App.css";

import Facebook from "./components/Facebook";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Facebook Login Example</h1>
        </header>
        <p className="App-intro">To get started, Authenticate with Facebook.</p>
        <Facebook />
      </div>
    );
  }
}

export default App;
