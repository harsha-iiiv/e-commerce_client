import React, { Component } from "react";

import Routes from "./Routes/routes";
import NavBar from "./components/navbar/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes />
      </div>
    );
  }
}

export default App;
