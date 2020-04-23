import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import './burger.css'

function Sidebar(props) {
  
  const [state, setState] = useState(false);

  return (
    <Menu isOpen={state} onStateChange={() => setState(props.isOpen)}>
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