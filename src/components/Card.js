import star from "../images/Star.png"
import cardimg1 from "../images/card1.png"
import cardimg2 from "../images/card2.png"
import cardimg3 from "../images/card3.png"


export default function Card() {
    return(
        <div className="container m-5 d-flex flex-row">
            <div className="card col-4 border-0 m-3">
                <img src={cardimg1} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="d-flex">
                        <img className="mt-1" src={star} alt="star" srcset="" width={"15px"} height={"15px"}/>
                        <p className="ms-2">5.0 <span className="text-secondary">(6) . USA</span></p>
                    </div>
                    <p className="card-text lh-1">Life lessons with Katie Zaferes</p>
                    <p className="card-text lh-1"><strong>From $136</strong> / person</p>
                </div>
            </div>
            <div className="card col-4 border-0 m-3">
                <img src={cardimg2} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="d-flex">
                        <img className="mt-1" src={star} alt="star" srcset="" width={"15px"} height={"15px"}/>
                        <p className="ms-2">5.0 <span className="text-secondary">(30) . USA</span></p>
                    </div>
                    <p className="card-text lh-1">Learn wedding photography</p>
                    <p className="card-text lh-1"><strong>From $125</strong> / person</p>
                </div>
            </div>
            <div className="card col-4 border-0 m-3">
                <img src={cardimg3} className="card-img-top" alt="..." height={"500px"}/>
                <div className="card-body">
                    <div className="d-flex">
                        <img className="mt-1" src={star} alt="star" srcset="" width={"15px"} height={"15px"}/>
                        <p className="ms-2">4.8 <span className="text-secondary">(2) . USA</span></p>
                    </div>
                    <p className="card-text lh-1">Group Mountain Biking</p>
                    <p className="card-text lh-1"><strong>From $50</strong> / person</p>
                </div>
            </div>
        </div>
    )
}