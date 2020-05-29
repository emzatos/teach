import React from 'react';
import {HashRouter, Route} from 'react-router-dom'
import Sidebar from "./Sidebar.js"
// import { createBrowserHistory } from "history";
import Preface from "./Preface.js"
import About from "./About.js"
import Prologue from "./Prologue.js"

function App() {


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
