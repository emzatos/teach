import React from 'react';
import {HashRouter, Route, Link} from 'react-router-dom'
import Sidebar from "./Sidebar.js"
import {createBrowserHistory} from "history"
import Preface from "./Preface.js"
import About from "./About.js"
import Prologue from "./Prologue.js"
import NavButton from "./NavButton.js"

function App() {
  const history = createBrowserHistory();
  console.log(history.location.pathname);

  return (
      <main>
          <HashRouter>
              <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
              <Route path= '/' component={Preface} exact />
              <Route path= '/preface' component={Preface}  />
              <Route path= '/prologue' component={Prologue}  />
              <Route path= '/about' component={About}  />
          </HashRouter>
          <Link to="/prologue" style={{textDecoration: "none"}}>
          <div className="test" onClick = {() => {console.log(history.location.pathname)}}>
            <NavButton direction="Next" link="Prologue"/>
            </div>
          </Link>
      </main>
  )
}
export default App;
