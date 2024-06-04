import group from "../images/HeroGroup.png"


export default function Hero(){
    return(
        <div className="container">
            <div className="m-5 text-center">
            <img src={group} alt="img" style={{maxwidth:"400px"}} className="col-md-10 col-12"/>
            </div>
            <h1 className="">Online Experiences</h1>
            <p className="col-md-3" style={{fontSize:"16px"}}>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}