import NavBar from './components/NavBar.js';
import Meme from './components/Meme.js';
import React from 'react';
import './App.css';

function App() {
  //  function greeting(name) {
  //   const date = new Date()
  //   const hours = date.getHours()
  //   let timeofDay
  //   if(hours >= 4 && hours <12)
  //   {
  //     timeofDay = "Morning"
  //   }
  //   else if(hours >= 12 && hours <17)
  //   {
  //     timeofDay = "Afternoon"
  //   }
  //   else if(hours >= 17 && hours <20)
  //   {
  //     timeofDay = "Evening"
  //   }
  //   else
  //   {
  //       timeofDay = "Night"
  //   }
  //   return `Good ${timeofDay}, ${name}`
  // }
  // console.log(greeting("Zainab"))
  // const [things, setThings] = React.useState(["thing 1", "thing 2"])
  // function addItem(){
  //     const newArray =`thing ${things.length + 1}`
  //     setThings(prevState=>[...prevState,newArray])
  //     console.log(things)
  //   }
  //   const thingsElements = things.map( thing =><p key={thing}>{thing}</p>)

  // const thingsArray=["thing 1", "thing 2"]
  // // newArray = thingsArray.map(thing=>(thing+"thing3"))
  // function addItem(){
  //   const newArray =`thing ${thingsArray.length + 1}`
  //   thingsArray.push(newArray)
  //   console.log(thingsArray)
  // }
  // const thingsElements = thingsArray.map( thing =><p key={thing}>{thing}</p>)

  // function handleClick() {
  //   console.log("I was clicked!")
  // }
  // function handleMouseOver() {
  //   console.log("MouseOver!")
  // }
  // const state="Yes"

  const [isImportant, setIsImportant] = React.useState("Yes")

  function handleClick() {
    setIsImportant("No") 
  }
  return (
  <div className='state'>
    <h1 className='state--title'>Is state important to know?</h1>
    <div className='state--value' onClick={handleClick}>
      <h1>{isImportant}</h1>
    </div>
    {/* <NavBar/>
    <Meme/>
     */}
    {/* {greeting} */}

    {/* {thingsElements}
    {/* <img onMouseOver={handleMouseOver} src="https://picsum.photos/640/360" />
    <button onClick={handleClick}>Click me</button> */}
  </div>
   
  );
}

export default App;
