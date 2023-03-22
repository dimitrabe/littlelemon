import Button from "./Button";
import logo from "../images/Logo.svg";

function ConfirmationPage(props) {
    return (
        <div className="ConfirmationPageSection">
            <img src={logo} alt="The liitle lemon logo consists of a yellow lemon on the left and right next to it, it is written 'Little Lemon' in capital letters"/>
            <h2>Thank you!</h2>
            <h2>We have sent you a confirmation email at user@user.com.</h2>
            <h2>Please do not hesitate to contact us at 1234567890 or littlelemon@littlelemon.com.</h2>
            <Button className="myButton primary" value="Back home" link="Main" />
        </div>
    )
}

export default ConfirmationPage;