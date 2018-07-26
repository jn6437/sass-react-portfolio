import React, { Component } from "react";
import MenuButton from "./component/menu_button";
import Menu from "./component/menu";
import Home from "./component/home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <body id="bg-img">
        <div class="overlay" />
        <header>
          <MenuButton />
          <Menu />
        </header>
        <Home />
      </body>
    );
  }
}

export default App;
