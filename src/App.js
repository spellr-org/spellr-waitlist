import React from 'react';
import './App.css';
import WaitlistWidget from './WaitlistWidget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">spellr</h1>
        <p className="description">Individually-paced digital phonics education for early English education.</p>
        <div className="widget-container">
          <WaitlistWidget />
        </div>
      </header>
    </div>
  );
}

export default App;