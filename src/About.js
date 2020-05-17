import React from 'react';
import './App.css';
import Quote from "./Quote.js"


function About(props) {

  return (
    <div className="Post">
      <header className="Header">
        <p className="Title">About</p>
        <Quote quote="hi" author="hi"></Quote>
      </header>
      <body>
        <div className="Body">
            Under construction
        </div>
      </body>
    </div>
  );
}

export default About