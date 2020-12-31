import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import Detail from "./detail";
import Error from "./error";
import React from "react";

function App() {
  return (
    <div className="App">
      <section className="portfolio-block projects-cards">
        <div className="container">
      <Router>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}>
            <Home />
          </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/home`}>
            <Home />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/detail/:movieID`} component={Detail}/>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
        </div>
      </section>
    </div>
  );
}

export default App;
