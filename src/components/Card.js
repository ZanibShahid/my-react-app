import star from "../images/Star.png"
export default function card(props){
    return (
        <div className="container">
            <div className="card border-0 m-3">
                <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="d-flex">
                        <img className="mt-1" src={star} alt="star" srcset="" width={"15px"} height={"15px"}/>
                        <p className="ms-2">{props.rating} <span className="text-secondary">({props.reviewCount}) . {props.country}</span></p>
                    </div>
                    <p className="card-text lh-1">{props.title}</p>
                    <p className="card-text lh-1"><strong>From ${props.price}</strong> / person</p>
                </div>
            </div>
        </div>
    )
}