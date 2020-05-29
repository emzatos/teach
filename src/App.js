import React, {useState} from 'react';
import {HashRouter, Route, Link} from 'react-router-dom'
import Sidebar from "./Sidebar.js"
// import { createBrowserHistory } from "history";
import Preface from "./Preface.js"
import About from "./About.js"
import Prologue from "./Prologue.js"
import NavButton from "./NavButton.js"

function App() {

  const paths = ["Preface", "Prologue", "About"];
  const history = window.location.href.split("/").slice(-1)[0];
  let startIndex = 0;
  if (history.length > 0) {
        startIndex = (
          paths.indexOf(
            history.charAt(0).toUpperCase + history.slice(1)
          )
        );
      }
  
      const [index, setIndex] = useState(startIndex);


  return (
      <main>
          <HashRouter>
              <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
              <Route path= '/' component={Preface} exact />
              <Route path= '/preface' component={Preface}  />
              <Route path= '/prologue' component={Prologue}  />
              <Route path= '/about' component={About}  />
              
          </HashRouter>
      </main>
  )
}
export default App;
