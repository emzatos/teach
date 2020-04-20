import React, {useState, useEffect} from 'react';
import './App.css';
import txt from './preface.txt';


function App() {

  const [text, setText] = useState("");

  useEffect(() => {
    const fileUrl = txt;
    fetch(fileUrl)
    .then( r => r.text() )
    .then( t => setText(t.toString()) );
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <p className="Title">Preface</p>
        <p className="Subtitle">I hate algebra.<br/>John Conway</p>
      </header>
      <body>
        <div className="App-body" dangerouslySetInnerHTML={{ __html: text }}/>
      </body>
    </div>
  );
}

export default App;
