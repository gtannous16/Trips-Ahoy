import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Quiz from "./components/Pages/quizPage";
import Cruise from "./components/Pages/cruisesPage";
import Home from "./components/Landing/landing";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={Quiz} />
          <Route path="/quiz/cruise/:personality" component={Cruise} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
