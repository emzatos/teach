import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Sidebar from "./Sidebar.js"

import Preface from "./Preface.js"
import About from "./About.js"
import Prologue from "./Prologue.js"



function App() {

  return (
      <main>
          <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
          <BrowserRouter baseName={process.env.PUBLIC_URL}>
              <Route path= '/' component={Preface} exact />
              <Route path= '/preface' component={Preface}  />
              <Route path='/teach' component={Preface}  />
              <Route path= '/prologue' component={Prologue}  />
              <Route path= '/about' component={About}  />
          </BrowserRouter>
      </main>
  )
}
export default App;
