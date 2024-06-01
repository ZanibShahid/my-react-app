import profile from "../images/profile.png"

export default function Header() {
    return(
        <div>
            <img src={profile} class="card-img-top" alt="..."/>
            <div class="card-body text-center">
              <h3 class="card-title fw-bold lh-1">Laura Smith</h3>
              <p class="card-text lh-1" style={{color: '#F3BF99'}}>Frontend Developer</p>
              <p className="card-text lh-1">laurasmith.website</p>
              <a href="#" className="btn btn-lg me-3 btn-light px-5">
                <i className="fa fa-envelope"></i> Email
              </a>
              <a href="" target="_blank" className="btn btn-primary btn-lg px-4">
                <i className="fa fa-linkedin"></i> LinkedIn
              </a>
            </div>
        </div>
    )
}