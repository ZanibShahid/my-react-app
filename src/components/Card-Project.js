import Info from "./Info";
import About from "./About";
import Interest from "./Interest";
import Footer from "./Footer";

function CardProject() {
    return(
        <div class="card">
            <Info/>
            <About/>
            <Interest/>
            <Footer/>
        </div>
    );
}

export default CardProject