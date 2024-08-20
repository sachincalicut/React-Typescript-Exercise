import React from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeToggler from './components/ThemeToggler';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
       
        <ThemeToggler/>
      </header>
     
    </div>
  );
}

export default App;
