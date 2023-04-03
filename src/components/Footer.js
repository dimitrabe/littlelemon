import logo from "../images/Logo.svg";
import Nav from "./Nav";
import ContactInfo from "./ContactInfo";
import SocialMediaIcons from "./SocialMediaIcons";


function Footer(props){
    return(
        <footer className={props.color}>
            <div className="flex-container white_text align-start">
                <img src={logo} alt="The little lemon logo consists of a yellow lemon on the left and right next to it, it is written 'Little Lemon' in capital letters"/>
                <Nav className="flexbox-col"/>
                <ContactInfo className="flexbox-col"/>
                <SocialMediaIcons className="flexbox-row wrap"/>
            </div>
        </footer>
    )
}

export default Footer;