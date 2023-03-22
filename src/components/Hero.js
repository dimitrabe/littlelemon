import fingerfood from "../images/restauranfood.jpg";
import Button from "./Button";

function Hero(props){
    return(
        <div className="heroSection">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <br/>
            <p>
                We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <Button className="myButton primary" value="Reserve a table" link="ReservationOptions"/>
            <img src={fingerfood} alt="A person is serving food on a big plate" />
        </div>
    )
}

export default Hero;