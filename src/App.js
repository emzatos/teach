import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Sidebar from "./Sidebar.js"

import Preface from "./Preface.js"
import About from "./About.js"
import Prologue from "./Prologue.js"



function App() {

  return (
      <main>
          <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
          <Switch>
              <Route path="/" component={Preface} exact />
              <Route path="/preface" component={Preface} exact />
              <Route path="/prologue" component={Prologue} exact />
              <Route path="/about" component={About} exact />
          </Switch>
      </main>
  )
}
export default App;
