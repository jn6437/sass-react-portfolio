import React from "react";

const MenuButton = props => {
  return (
    <div
      className={props.menuStatus ? "menu-btn" : "menu-btn close"}
      onClick={props.onMenuClick}
    >
      <div className="btn-line" />
      <div className="btn-line" />
      <div className="btn-line" />
      {/*<div className="union"> MenuButton </div>*/}
    </div>
  );
};

export default MenuButton;
