import React from "react";

const Menu = props => {

  return (
    <nav className={props.menuStatus ? "menu" : "menu show"}>
      <div
        className={props.menuStatus ? "menu-branding" : "menu-branding show"}
      >
        <div className="portrait" />
      </div>

      <ul className={props.menuStatus ? "menu-nav" : "menu-nav show"}>
        <li className={props.menuStatus ? "nav-item" : "nav-item show current"}>
          Projects
        </li>
        <li className={props.menuStatus ? "nav-item" : "nav-item show"}>
          <a href="https://deco3801-nacltea.uqcloud.net/" className="nav-link">
            {/*<div className="project1" />*/}
            Water Quality Analysis Tool
          </a>
        </li>
        <li className={props.menuStatus ? "nav-item" : "nav-item show"}>
          <a href="https://github.com/UQdeco2800/coaster" className="nav-link">
            {/*<div className="project1" />*/}
            Open Source Java Game
          </a>
        </li>
        <li className={props.menuStatus ? "nav-item" : "nav-item show"}>
          <a href="https://github.com/jn6437/POLYWAR" className="nav-link">
            {/*<div className="project1" />*/}
            Unity based Mobile Game
          </a>
        </li>
      </ul>
    </nav >
  );
};

export default Menu;
