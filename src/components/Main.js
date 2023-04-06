import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

function Main(props) {
    return (
        <main>
            <Hero color="green"/>
            <Specials color="white"/>
            <Testimonials color="green"/>
            <About id="about" color="white"/>
        </main>
    )
}

export default Main;