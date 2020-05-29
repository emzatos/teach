import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import './burger.css'

function Sidebar(props) {

  const [state, setState] = useState(false);

  const style = {
    bmMenuWrap: {
      transition: 'all 0.3s'
    },
    bmBurgerButton: {
      width: '22px',
      height: '18px',
      left: '13px',
      top: '20px'
    }
  }

  return (
    <Menu styles = {style} isOpen={state} onStateChange={() => setState(props.isOpen)}>
      <Link className="menu-item" to="/preface" onClick={()=>setState(false)}>
        Preface
      </Link>

      <Link className="menu-item" to="/prologue" onClick={()=>setState(false)}>
        Prologue
      </Link>

      <Link className="menu-item" to="/about" onClick={()=>setState(false)}>
        About
      </Link>
    </Menu>
  );
};

export default Sidebar