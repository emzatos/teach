import React from 'react';
import {HashRouter, Route} from 'react-router-dom'
//import Sidebar from "./Sidebar.js"
// import { createBrowserHistory } from "history";
import Preface from "./Preface.js"
import About from "./About.js"
import Prologue from "./Prologue.js"
// import NavButton from "./NavButton.js"

function App() {

  // const paths = ["Preface", "Prologue", "About"];
  // const history = window.location.href.split("/").slice(-1)[0];
  // let startIndex = 0;
  // if (history.length > 0) {
  //       startIndex = (
  //         paths.indexOf(
  //           history.charAt(0).toUpperCase + history.slice(1)
  //         )
  //       );
  //     }
  
      // const [index, setIndex] = useState(startIndex);


  return (
      <main>
          <HashRouter>
              {/* <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} /> */}
              <Route path= '/' component={Preface} exact />
              <Route path= '/preface' component={Preface}  />
              <Route path= '/prologue' component={Prologue}  />
              <Route path= '/about' component={About}  />

              {/* <Link to={ index === paths.length-1 ? "/" : "/" + paths[index+1].toLowerCase() } style={{textDecoration: "none",  display: index === paths.length-1 ? "none" : "inline"}}>
                <div className="test" onClick = {() => {setIndex( (index + 1) % paths.length)}}>
                  <NavButton direction="Next" link={paths[index+1]}/>
                </div>
              </Link>

              <Link to={ index <= 0 ? "/" : "/" + paths[index-1].toLowerCase() } style={{textDecoration: "none", display: index === 0 ? "none" : "inline"}}>
                <div className="test" onClick = {() => {setIndex( (index - 1) % paths.length)}}>
                  <NavButton direction="Previous" link={paths[index-1]}/>
                </div>
              </Link>
               */}
          </HashRouter>
      </main>
  )
}
export default App;
