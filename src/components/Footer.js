import logo from "../images/Logo.svg";
import Nav from "./Nav";
import ContactInfo from "./ContactInfo";
import SocialMediaIcons from "./SocialMediaIcons";


function Footer(props){
    return(
        <footer className={`${props.color} flex-container white_text align-start space-evenly`}>
                <img src={logo} alt="The little lemon logo consists of a yellow lemon and 'Little Lemon' is written in capital letters"/>
                <Nav className="flexbox-col"/>
                <ContactInfo className="flexbox-col"/>
                <SocialMediaIcons className="flexbox-row wrap"/>
        </footer>
    )
}

export default Footer;