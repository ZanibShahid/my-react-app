import './App.css';
import data from './components/data.js';
import NavBar from './components/NavBar.js';
import Card from './components/Card.js';

function App() {
  const cards = data.map(item => {
    return (
        <Card 
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
        />
    )
  }) 
  return (
 
  <div>
    <NavBar/>
    {/* <Card/> */}
    <section className='card-list'>
    {cards}
    </section>
  </div>
   
  );
}

export default App;
