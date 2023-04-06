import fingerfood from "../images/restauranfood.jpg";
import Button from "./Button";

function Hero(props) {
    return (
        <div className={`${props.color}`}>
            <div className="flex-container">
                <div className="flexbox-col">
                    <div>
                        <h1 className="yellow_text">Little Lemon</h1>
                        <h2 className="white_text">Chicago</h2>
                    </div>
                    <p className="white_text">
                        We are a family-owned Mediterranean restaurant, focused on traditional recipes, served with a modern twist.
                    </p>
                    <br/>
                    <Button className="myButton primary" value="Reserve a table" link="/ReservationOptions" />
                </div>

                <img className="hero-image" src={fingerfood} alt="A person is serving food on a big plate" />
            </div>
        </div>
    )
}
export default Hero;