
export default function NavBar() {
    return(
        <nav className="shadow-sm px-4 d-flex align-items-center justify-content-between text-white " style={{backgroundImage:"linear-gradient(90deg, #672280 1.18%, #A626D3 100%)", height:"65px",}}>
            <div >
            <img className="" src="./images/TrollFace.png" style={{height:"40px", width:"40px"}}  alt="logo"/>
            <a href="#" className="text-decoration-none text-white ms-2 fs-5">Meme Generator</a>
            </div>
            <p className="m-0">React Course - Project 3</p>
        </nav>
    )
}