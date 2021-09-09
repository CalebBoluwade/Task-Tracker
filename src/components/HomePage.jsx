import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tracker from "./Tracker";
import Index from "./Index";
import AboutPage from "./AboutPage";
import Developers from "./Developers";

const HomePage = () => {
  return (
    <>
      <Router>
        <div id="homepage">
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/Tracker" component={Tracker} />
            <Route path="/About" component={AboutPage} />
            <Route path="/Developers" component={Developers} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default HomePage;
