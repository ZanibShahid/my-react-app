import NavBar from './components/NavBar.js';
import Meme from './components/Meme.js';
import React from 'react';
import './App.css';

function App() {
  // const thingsArray = ["Thing 1", "Thing 2"]
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
  function addItem() {
      // We'll work on this next
      // const newThingText = `Thing ${thingsArray.length + 1}`
      // thingsArray.push(newThingText)
      // document.getElementById()
      // console.log(thingsArray)
     setThingsArray(prevThingsArray => {
      return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
     })
  }
  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  return (
    <div>
        <button onClick={addItem}>Add Item</button>
        {thingsElements}
    </div>
   
  );
}

export default App;
