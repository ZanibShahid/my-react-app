import NavBar from './components/NavBar.js';
import Meme from './components/Meme.js';
import Count from './components/Count.js';
import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0)
    
  function add() {
      setCount(prevCount => prevCount + 1)
  }
    
  function subtract() {
      setCount(prevCount => prevCount - 1)
  }
return (
  // <Meme/>
  
  <div className="counter">
      <button className="counter--minus" onClick={subtract}>–</button>
      <Count
        number = {count}
      />
      <button className="counter--plus" onClick={add}>+</button>
  </div>
  );
}

export default App;
