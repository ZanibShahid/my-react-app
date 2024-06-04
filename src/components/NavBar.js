import navbarlogo from "../images/navlogo.png"

export default function NavBar() {
    return(
        <nav className="shadow-sm rounded">
            <img className="p-4" src={navbarlogo} alt="logo"/>
        </nav>
    )
}