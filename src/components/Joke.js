export default function Joke(props){
    console.log(props.isPun)
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
           <button type="reset" className="me-3 btn btn-primary">Upvotes:{props.upvotes}</button>
           <button type="reset" className="btn btn-warning">Downvotes:{props.downvotes}</button>
           <hr />
        </div>
    )
}