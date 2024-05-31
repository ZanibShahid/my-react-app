import profile from "../images/profile.png"

export default function Info() {
    return(
        <div>
            <img src={profile} alt="John"/>
            <h1>Laura Smith</h1>
            <p class="title">Frontend Developer</p>
            <p>laurasmith.website</p>
            <a href="" className="btn btn-email">
                <i className="fa fa-envelope"></i> Email
            </a>
            <a href="" target="_blank" className="btn btn-linkedin">
                <i className="fa fa-linkedin"></i> LinkedIn
            </a>
        </div>
    )
}