import React, {useState} from 'react';
import {motion} from 'framer-motion'

function NavButton (props) {
    const styles = {
        width: 100,
        height: 100,
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        cursor: "pointer"
      };
      
      const variants = {
        active: {
          opacity: 1,
          background: "black",
          x: "50px",
          scale: 1,
          color: "white"
        },
        inActive: {
          opacity: 1,
          background: "white",
          x: "50px",
          scale: 1,
          color: "black"
        }
      };
    const [isToggled, setToggle] = useState(false);
    return ( 
      <motion.div
        onHoverStart={() => setToggle(!isToggled)}
        onHoverEnd={() => setToggle(!isToggled)}
        style={styles}
        animate={isToggled ? "active" : "inActive"}
        variants={variants}
      >
        <span>{isToggled ? props.link : props.direction}</span>
      </motion.div>
    );
  };

  export default NavButton