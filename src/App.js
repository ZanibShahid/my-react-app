
import React from 'react';
import './App.css';
import Joke from './Joke';
import jokesData from './jokesData';
function App(props) {
  const jokeElements = jokesData.map(joke => {
    return (
        <Joke 
            key={joke.id}
            setup={joke.setup} 
            punchline={joke.punchline} 
        />
    )
})
return (
    <div>
        {jokeElements}
    </div>
)
}

export default App;
