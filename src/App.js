
import React from 'react';
import boxes from './boxes';
import './App.css';
import Box from './Box';

function App(props) {
 const [squares, setSquares] = React.useState(boxes)
//  const styles = {
//   backgroundColor : props.darkMode ?  "#222222" : "#cccccc"
//  } 
// function toggle(id) {
//   setSquares(prevSquares => { 
//     return prevSquares.map((square) => {
//       return square.id === id ? {...square, on: !square.on} : square
//     })
//       // const newSquares = []
//       // for(let i = 0; i < prevSquares.length; i++) {
//       //     const currentSquare = prevSquares[i]
//       //     if(currentSquare.id === id) {
//       //         const updatedSquare = {
//       //             ...currentSquare,
//       //             on: !currentSquare.on
//       //         }
//       //         newSquares.push(updatedSquare)
//       //     } else {
//       //         newSquares.push(currentSquare)
//       //     }
//       // }
//       // return newSquares
//   })
// }
function toggle(id){
  setSquares(prevSquares => {
    return prevSquares.map((square) => {
      return square.id === id ? {...square, on : !square.on} :square
    })
  })
}
 const squareElements = squares.map(square => (
  <Box 
    on={square.on} 
    key={square.id} 
    id={square.id} 
    toggle={() => toggle(square.id)}/>
  ))
return (
  
  <main>
    {squareElements}
  </main>

  );
}

export default App;
