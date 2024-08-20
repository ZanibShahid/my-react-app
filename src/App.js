import NavBar from './components/NavBar.js';
import Meme from './components/Meme.js';
import Star from './components/Star.js';
import React from 'react';
import './App.css';

function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })

  // let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
return (
  // <Meme/>
  
        <main>
            <article className="card">
                <img src="./images/profile.png" className="card--image" />
                <div className="card--info">
                    <Star
                      isFilled = {contact.isFavorite}
                      handleClick = {toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
  );
}

export default App;
