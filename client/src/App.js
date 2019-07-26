import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Quiz from "./components/pages/quizPage";
import Cruise from "./components/pages/cruisesPage";
import Home from "./components/Landing/landing";
import Analytics from "./components/pages/analytics";

function App () {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route exact path = "/quiz" component = {Quiz} />
          <Route exact path = "/cruise" component = {Cruise} /> 
          <Route exact path = "/analytics" component = {Analytics} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
