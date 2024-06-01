import Info from "./Header";
import About from "./Body";
import Interest from "./Interest";
import Footer from "./Footer";

function CardProject() {
    return(
        <div class="card-data">
            <Info/>
            <About/>
            <Interest/>
            <Footer/>
        </div>
    );
}

export default CardProject