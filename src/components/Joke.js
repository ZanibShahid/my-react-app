export default function Joke(props){
    return(
        // <div className="container">
        //     <h3>Setup:{props.setup}</h3>
        //     <p>Punchline:{props.punchline}</p>
        //     <hr />
        // </div>
        // <div className="container">
        //    {props.setup && <h3>Setup:{props.setup}</h3>}
        //    <p>Punchline:{props.punchline}</p>
        //    <hr />
        // </div>
        <div className="container">
           <h3 style={{display:props.setup?"block":"none"}}>Setup:{props.setup}</h3>
           <p>Punchline:{props.punchline}</p>
           <hr />
        </div>
    )
}