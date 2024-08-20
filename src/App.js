import NavBar from './components/NavBar.js';
import Meme from './components/Meme.js';
import Header from './components/Header.js';
import Body from './components/Body.js';
import React from 'react';
import './App.css';

function App() {
  const [user, setUser] = React.useState("Joe")

return (
  // <Meme/>
  
    <main>
        <Header name = {user} />
        <Body name = {user} />
    </main>

  );
}

export default App;
