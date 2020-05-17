import React from 'react';
import './App.css';


function About(props) {

  return (
    <div className="Post">
      <header className="Header">
        <p className="Title">About</p>
      </header>
      <body>
        <div className="Body">
            Hello! my name is Emran Shafaq. I currently work as a software engineer at Microsoft under the Windows Security team.
            I graduated from the University of Texas at Austin with degrees in computer science and mathematics. I started this blog
            primarily to learn React, but ultimately to develop my skills as an instructor. If you found this blog useful please share it 
            with others, or let me know! If you have a request for a topic, leave a comment! If you want more math learning tools, check out
            3blue1brown on Youtube!
        </div>
      </body>
    </div>
  );
}

export default About