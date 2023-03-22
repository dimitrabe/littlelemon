import chefs1 from "../images/Mario and Adrian A.jpg";
import chefs2 from "../images/Mario and Adrian b.jpg";

function About(props){
    return(
        <div className="heroSection">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <br/>
            <p>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. 
                The restaurant features a locally-sourced menu with daily specials.
            </p>
            <img src={chefs1} alt="Two chefs discussing. In front of them there are a few bowls." />
            <img src={chefs2} alt="Two chefs laughing. Behind them there is a stove." />
        </div>
    )
}

export default About;