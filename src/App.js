import './App.css';
import Joke from './components/Joke';
import Card from './components/Card'
import card1 from "./images/card1.png"

function App() {
  
  return (
   <div>
    <Card
    img = {card1}
    rating ={5.0}
    reviewCount= {6}
    country = "Pakistan"
    title ="Life Lessons with Katie Zaferes"
    price ={136}
    
    />
    {/* <Joke 
    setup="I got my daughter a fridge for her birthday." 
    punchline="I can't wait to see her face light up when she opens it."
    upvotes={2}
    downvotes={4}
    isPun={true}
    
    />
    <Joke 
    setup="How did the hacker escape the police?" 
    punchline="He just ransomware!"
    upvotes={6}
    downvotes={0}
    isPun={true}
    />
    <Joke 
    setup="Why don't pirates travel on mountain roads?" 
    punchline="Scurvy."
    upvotes={9}
    downvotes={3}
    isPun={false}
    />
    <Joke 
    setup="Why do bees stay in the hive in the winter?" 
    punchline="Swarm."
    upvotes={1}
    downvotes={4}
    isPun={false}
    />
    <Joke 
    setup="What's the best thing about Switzerland?" 
    punchline="I don't know, but the flag is a big plus!"
    upvotes={7}
    downvotes={1}
    isPun={true}/>
    <Joke 
    punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
    upvotes={0}
    downvotes={8}
    isPun={false}
    comments={[{author: "", body: "", title: ""},]}
    /> */}

   </div>
   
  );
}

export default App;
