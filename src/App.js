import React, { Component } from "react";
import MenuButton from "./component/menu_button";
import Menu from "./component/menu";
import Home from "./component/home";
import "./style/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    return (
      <div>
        <header>
          <MenuButton
            menuStatus={this.state.showMenu}
            onMenuClick={this.toggleMenu}
          />
          <Menu
            menuStatus={this.state.showMenu}
            navList={["Home", "About", "Projects", "Contact"]}
          />
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
