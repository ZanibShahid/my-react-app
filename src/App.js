import './App.css';
import Contact from './components/Contact';
import one from "./images/1.jpg"
import two from "./images/2.jpg"
import three from "./images/3.jpg"
import four from "./images/4.jpg"


function App() {
  // const firstName = "Zanib"
  // const lastName="Shahid"

  // const date = new Date()
  // // const hours = date.getHours()% 12
  // const hours = date.getHours()

  // let timeOfDay
  // if (hours<12){
  //   timeOfDay = 'morning'
  // }
  // else if (hours>=12 && hours<17)
  //   {
  //     timeOfDay = 'afternoon'
  //   }
  //   else{
  //     timeOfDay = 'night'
  //   }
  return (
    // <h1>Hello {firstName} {lastName}!</h1>

    // <h1>It is currently about {date.getHours()% 12}'o clock</h1>
    
    // <h1>It is currently about {hours}'o clock.Good {timeOfDay}</h1>
    <div className="contacts">
            <Contact 
            image={one}
            name="Mr. Whiskerson"
            phone="(212) 555-1234"
            email="mr.whiskaz@catnap.meow" />
            <Contact
            image={two}
            name="Fluffykins"
            phone="(212) 555-2345"
            email="fluff@me.com"/>
            <Contact
            image={three}
            name="Felix"
            phone="(212) 555-4567"
            email="thecat@hotmail.com"/>
            <Contact
            image={four}
            name="Pumpkin"
            phone="(0800) CAT KING"
            email="pumpkin@scrimba.meow"/>
    </div>
  );
}

export default App;
