// import Description from "./Components/Description";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Pivacypolicy from "./Components/Pivacypolicy";
import About from "./Components/About";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Advert from "./Components/Advert";
import Terms from "./Components/Terms";
import Description from "./Components/Description";



function App() {
  return (
    // enclosed the pages with the react-router-dom
    // if we warp the pages with two routers the problem occurs
    <><Router>
      <Navbar title="Text Utilities" />
      <div className="container my -3">
        <Switch>
          <Route exact path="/about" >
            <About />
          </Route>
          <Route exact path="/pivacypolicy" >
            <Pivacypolicy />
          </Route>
          <Route exact path="/terms" >
            <Terms />
          </Route>
          <Route exact path="/" >
            <Textform />
            <Description />
            <Advert />
          </Route>
        </Switch>
      </div> </Router>
    </>
  );
}

export default App;
