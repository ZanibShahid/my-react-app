import './App.css';
import jokeData from './components/jokeData';
// import Joke from './components/Joke';
// import jokeData from './components/jokeData';


function App() {
   const card = jokeData.map(()=>{
    return(
      <div className="card col-4 border-0 m-3">
                <img src="./images/card1.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="d-flex">
                        <p className="ms-2">5.0 <span className="text-secondary">(6) . USA</span></p>
                    </div>
                    <p className="card-text lh-1">Life lessons with Katie Zaferes</p>
                    <p className="card-text lh-1"><strong>From $136</strong> / person</p>
                </div>
      </div>
    )
   })
  // const jokeElements = jokeData.map(joke=>{
  //   return <Joke setup={joke.setup} punchline={joke.punchline}/>
  // })

  return (
  //  <div>
  //   <Joke 
  //   setup="I got my daughter a fridge for her birthday." 
  //   punchline="I can't wait to see her face light up when she opens it."
  //   upvotes={2}
  //   downvotes={4}
  //   isPun={true}
    
  //   />
  //   <Joke 
  //   setup="How did the hacker escape the police?" 
  //   punchline="He just ransomware!"
  //   upvotes={6}
  //   downvotes={0}
  //   isPun={true}
  //   />
  //   <Joke 
  //   setup="Why don't pirates travel on mountain roads?" 
  //   punchline="Scurvy."
  //   upvotes={9}
  //   downvotes={3}
  //   isPun={false}
  //   />
  //   <Joke 
  //   setup="Why do bees stay in the hive in the winter?" 
  //   punchline="Swarm."
  //   upvotes={1}
  //   downvotes={4}
  //   isPun={false}
  //   />
  //   <Joke 
  //   setup="What's the best thing about Switzerland?" 
  //   punchline="I don't know, but the flag is a big plus!"
  //   upvotes={7}
  //   downvotes={1}
  //   isPun={true}/>
  //   <Joke 
  //   punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
  //   upvotes={0}
  //   downvotes={8}
  //   isPun={false}
  //   comments={[{author: "", body: "", title: ""},]}
  //   />
  //  </div>
  <div>
    {/* {jokeElements} */}
    {card}
  </div>
   
  );
}

export default App;
