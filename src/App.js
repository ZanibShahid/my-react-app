import NavBar from './components/NavBar.js';
import Meme from './components/Meme.js';
import React from 'react';
import './App.css';

function App() {
  // const isGoingOut = false
    
  // let answer = isGoingOut === true ? "Yes" : "No"  // Use ternary here
  // if(isGoingOut === true) {
  //     answer = "Yes"
  // } else {
  //     answer = "No"
  // }

  const [isGoingOut, setIsGoingOut] = React.useState(true)
  function changeMind (){
    setIsGoingOut(prevState => !prevState)
  }
  return (
    // <Meme/>
    <div className="state">
        <h1 className="state--title">Do I feel like going out tonight?</h1>
        <div className="state--value" onClick={changeMind}>
            <h1>{isGoingOut ? "Yes" : "No"}</h1>
        </div>
    </div>
   
  );
}

export default App;
