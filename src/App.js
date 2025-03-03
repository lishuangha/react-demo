import React from 'react';
import logo from './logo.svg';
import Button from './views/Button'
import axios from 'axios';
import './App.css';

function clickMethod() {
  console.log('Button clicked233');
  axios.get(`http://localhost:5000/test`).then((res) => {
    console.log('rrrres',res);
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button text="Submit" onClick={clickMethod} style={{ backgroundColor: '#f44336' }} />
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
  );
}

export default App;
