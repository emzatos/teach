import React, {useState, useEffect} from 'react';
import './App.css';
import txt from './preface.txt';
import Quote from "./Quote.js";
import Commento from "./Commento.js";

function Preface(props) {

  const [text, setText] = useState("");

  useEffect(() => {
    const fileUrl = txt;
    fetch(fileUrl)
    .then( r => r.text() )
    .then( t => setText(t.toString()) );
  }, []);


  return (
    <div className="Post">
      <header className="Header">
        <p className="Title">Preface</p>
        <Quote quote="i hate algebra" author="John Conway"/>
      </header>
      <body>
        <div className="Body" dangerouslySetInnerHTML={{ __html: text }}/>
      </body>
      <Commento id="preface"/>
    </div>
  );
}

export default Preface