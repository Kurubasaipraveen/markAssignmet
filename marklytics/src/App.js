// App.js

import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css'; // Assuming you have a CSS file for global styles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Stock Market Dashboard</h1>
      </header>
      <main className="App-main">
        <Dashboard />
      </main>
      <footer className="App-footer">
        <p>Created with React</p>
      </footer>
    </div>
  );
}

export default App;
