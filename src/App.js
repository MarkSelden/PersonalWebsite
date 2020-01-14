import React from 'react';
import logo from './logo.svg';
import './App.css';
import Section1 from './components/section1.js'
import Section2 from './components/section2.js'
import Head from './components/head.js'

function App() {
  return (

    <div className="grid2">
      <Head />
      <div section1>
        <Section1/>
      </div>

      <Section2/>

    </div>

     /*


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
      </header>
    </div>

  */


  )
}

export default App;
