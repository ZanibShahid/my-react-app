import Header from "./Header";
import CardBody from "./Body";
import profile from "../images/profile.png"
import Footer from "./Footer";

function CardTwo() {
    return(
        <div class="row row-cols-1 row-cols-md-2 g-4 m-3">
        <div class="col">
          <div className="p-5 rounded" style={{backgroundColor: '#23252C', borderRadius:'10px'}}>
          <div class="card text-white" style={{backgroundColor:'#1A1B21', borderRadius:'10px'}}>
            <Header/>
            <CardBody/>
            <Footer/>
          </div>
          </div>
        </div>
        <div class="col">
          <div className="p-5 rounded" style={{backgroundColor: '#23252C', borderRadius:'10px'}}>
          <div class="card text-white" style={{backgroundColor:'#1A1B21', borderRadius:'10px'}}>
            <Header/>
            <CardBody/>
            <Footer/>
          </div>
          </div>
        </div>
        <div class="col">
          <div className="p-5 rounded" style={{backgroundColor: '#23252C', borderRadius:'10px'}}>
          <div class="card text-white" style={{backgroundColor:'#1A1B21', borderRadius:'10px'}}>
            <Header/>
            <CardBody/>
            <Footer/>
          </div>
          </div>
        </div>
        <div class="col">
          <div className="p-5 rounded" style={{backgroundColor: '#23252C', borderRadius:'10px'}}>
          <div class="card text-white" style={{backgroundColor:'#1A1B21', borderRadius:'10px'}}>
            <Header/>
            <CardBody/>
            <Footer/>
          </div>
          </div>
        </div>
      </div>
    );
}

export default CardTwo