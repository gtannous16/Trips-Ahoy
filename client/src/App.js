// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import { Provider, Heading, Subhead } from 'rebass'
import {
  Hero, CallToAction, ScrollDownIndicator
} from 'react-landing-page'
 
const App = props => (
  <Provider>
    <Hero
      color="black"
      bg="white"
      backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
    >
        <Heading>Name of your app</Heading>
        <Subhead>a couple more words</Subhead>
        <CallToAction href="/getting-started" mt={3}>Get Started</CallToAction>
        <ScrollDownIndicator/>
    </Hero>
  </Provider>
)

export default App;