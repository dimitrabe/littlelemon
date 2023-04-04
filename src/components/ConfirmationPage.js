import Button from "./Button";
import logo from "../images/Logo.svg";

function ConfirmationPage(props) {
    return (
        <div className="overlay">
            <div className="flexbox-col space-between align-center text-align-center dark_gray_text">
                <img src={logo} alt="The little lemon logo consists of a yellow lemon on the left and right next to it, it is written 'Little Lemon' in capital letters"/>
                <br />
                <h2>Thank you!</h2>
                <h2>We have sent you a confirmation email at user@user.com.</h2>
                <h2>Please do not hesitate to contact us at 1234567890 or reserv@littlelemon.com.</h2>
                <br/>
                <Button className="myButton primary align-self-end" value="Back home" link="Main" />
            </div>
        </div>
    )
}

export default ConfirmationPage;