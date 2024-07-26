import React from "react"

export default function Card(props) {
    
    return (
        <div className="my-5 container">
        <div className="card flex-row ">
            <img class="card-img-left rounded img-fluid" style={{height:"168px",width:"150px"}} src={`../images/${props.item.coverImg}`}/>
        <div className="card-body">
            <p>
                <span><img className="me-1" src="../images/location.png" alt="" /></span>
                {props.item.location} 
                <span><a href="" className="text-secondary ms-1">View on Google Maps</a></span></p>
          <h4 className="card-title h5 h4-sm">{props.item.title}</h4>
          <p className="card-text">{props.item.description}</p>
        </div>
        </div>
        </div>
    )
}