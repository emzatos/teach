import React from "react";
import { slide as Menu } from "react-burger-menu";
import './burger.css'

export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/preface">
        Preface
      </a>

      <a className="menu-item" href="/prologue">
        Prologue
      </a>

      <a className="menu-item" href="/about">
        About
      </a>
    </Menu>
  );
};