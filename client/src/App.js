import React from 'react';
import logo from './logo.svg';
import './App.css';
// import JumbotronPage from './components/Jumbotron/jumbotron.js'
// import FooterPage from './components/Footer/footer.js';
// import question from '../src/components/Question';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <FooterPage/> */}
      </header>
    </div>
  );
}

export default App;
