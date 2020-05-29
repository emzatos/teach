import React, {useState} from 'react';
import {motion} from 'framer-motion'

function NavButton (props) {
    const prevStyles = {
        alignItems: 'center',
        position: 'absolute',
        left: '0px',
        border: '1px solid black',
        color: "white",
        cursor: "pointer",
        display: "flex",
        fontFamily: 'Prata , serif',
        height: 40,
        justifyContent: 'center',
        marginTop: '40px',
        marginBottom: '40px',
        width: 100,
      };
    
    const nextStyles = {
        alignItems: 'center',
        border: '1px solid black',
        float: 'right',
        color: "white",
        cursor: "pointer",
        display: "flex",
        right: "0px",
        fontFamily: 'Prata , serif',
        height: 40,
        justifyContent: 'center',
        marginRight: "50px",
        marginTop: '40px',
        marginBottom: '40px',
        width: 100,
    }
      
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
        onHoverStart={() => setToggle(true)}
        onHoverEnd={() => setToggle(false)}
        style={props.direction === "Next" ? nextStyles : prevStyles}
        animate={isToggled ? "active" : "inActive"}
        variants={variants}
      >
        <span>{isToggled ? props.link : props.direction}</span>
      </motion.div>
    );
  };

  export default NavButton