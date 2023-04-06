import Button from "./Button";
import logo from "../images/Logo.svg";

function PageNotFound(props) {
    return (
        <div className="overlay">
            <div className="flexbox-col space-between align-center text-align-center dark_gray_text">
                <img src={logo} alt="The little lemon logo consists of a yellow lemon on the left and right next to it, it is written 'Little Lemon' in capital letters"/>
                <br />
                <h2>Ooooops!</h2>
                <h2>It seems we are not ready to present you this page yet!</h2>
                <h2>You can contact us at 1234567890 or info@littlelemon.com.</h2>
                <br/>
                <Button className="myButton primary align-self-end" value="Back home" link="/" />
            </div>
        </div>
    )
}

export default PageNotFound;