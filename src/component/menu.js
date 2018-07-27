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
          <a href="/" className="nav-link">
            <div className="project1" />
            Water Quality Analysis Tool
          </a>
        </li>
        <li className={props.menuStatus ? "nav-item" : "nav-item show"}>
          <a href="/" className="nav-link">
            <div className="project2" />
            Coaster - A Java Game
          </a>
        </li>
        <li className={props.menuStatus ? "nav-item" : "nav-item show"}>
          <a href="/projects.html" className="nav-link">
            <div className="project3" />
            PolyWar - Unity based Mobile Game
          </a>
        </li>
      </ul>
    </nav >
  );
};

export default Menu;
