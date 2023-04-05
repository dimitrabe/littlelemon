import chefs1 from "../images/Mario and Adrian A.jpg";
import chefs2 from "../images/Mario and Adrian b.jpg";

function About(props) {
    return (
        <div className={`${props.color}`}>
            <div className="flex-container">
                <div className="flexbox-col">
                    <div>
                        <h1 className="dark_gray_text">Little Lemon</h1>
                        <h2 className="dark_gray_text">Chicago</h2>
                    </div>
                    <p className="dark_gray_text">
                        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.
                        The restaurant features a locally-sourced menu with daily specials.
                    </p>
                </div>
                <div className="image-stack" id="myImageStack">
                    <img className="image-stack-bottom"src={chefs1} alt="Two chefs discussing. In front of them there are a few bowls." />
                    <img className="image-stack-top" src={chefs2} alt="Two chefs laughing. Behind them there is a stove." />
                </div>
            </div>
        </div>
    )
}

export default About;