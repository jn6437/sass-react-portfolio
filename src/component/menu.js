import React from "react";

const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu-branding">
        <div className="portrait" />
      </div>
      <ul className="menu-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about.html" className="nav-link">
            About me
          </a>
        </li>
        <li className="nav-item">
          <a href="/work.html" className="nav-link">
            My Work
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact.html" className="nav-link">
            How To Reach Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
