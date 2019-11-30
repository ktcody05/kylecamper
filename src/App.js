import React from 'react';
import './bulma.css';
import './App.css'
import Temp from './components/Temp'

function App() {

  let humidity = 50

  return (
    <div className="App">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Camper Temperature
      </h1>
            <h2 className="subtitle">
              Current Camper Temperatures:
      </h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Temp />
          <div>
            Relative Humidity: {humidity} %
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
