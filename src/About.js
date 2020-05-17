import React from 'react';
import './App.css';
import Quote from "./Quote.js"


function About(props) {

  return (
    <div className="Post">
      <header className="Header">
        <p className="Title">About</p>
      </header>
      <body>
        <div className="Body">
            Hello there I'm Emran
        </div>
      </body>
    </div>
  );
}

export default About