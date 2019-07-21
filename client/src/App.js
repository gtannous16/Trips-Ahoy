import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import question from '../src/components/Question';
// import Cruises from './components/Cruises'
// import Quiz from './components/Quiz'
import Jumbotron from './components/Jumbotron/jumbotron'
import Header from './components/Header/header'

function NoMatch() {
  return <div>404</div>
}

function Quiz() {
  return <div>quiz</div>
}

function Cruises() {
  return <div>cruises</div>
}
function App() {
  return (
    <Router>
      <Header />
      <Jumbotron />
      <div>
        <Switch>
          <Route exact path="/" component={Quiz} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/cruises" component={Cruises} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
