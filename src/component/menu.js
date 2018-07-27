import React from "react";

const Menu = props => {
  const NavItem = props.navList.map(nav => {
    return (
      <li key={nav} className={props.menuStatus ? "nav-item" : "nav-item show"}>
        <a href="/.html" className="nav-link">
          {nav}
        </a>
      </li>
    );
  });

  return (
    <nav className={props.menuStatus ? "menu" : "menu show"}>
      <div
        className={props.menuStatus ? "menu-branding" : "menu-branding show"}
      >
        <div className="portrait" />
      </div>

      <ul className={props.menuStatus ? "menu-nav" : "menu-nav show"}>
        {NavItem}
        {/*
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about.html" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/projects.html" className="nav-link">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact.html" className="nav-link">
            Contact
          </a>
        </li>
         */}
      </ul>
    </nav>
  );
};

export default Menu;
