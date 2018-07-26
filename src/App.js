import React, { Component } from "react";
import MenuButton from "./component/menu_button";
import Menu from "./component/menu";
import Home from "./component/home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <MenuButton />
          <Menu />
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
