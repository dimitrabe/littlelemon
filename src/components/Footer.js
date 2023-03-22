import logo from "../images/Logo.svg";
import Nav from "./Nav";
import ContactInfo from "./ContactInfo";
import SocialMediaIcons from "./SocialMediaIcons";


function Footer(props){
    return(
        <footer>
            <img src={logo} alt="The liitle lemon logo consists of a yellow lemon on the left and right next to it, it is written 'Little Lemon' in capital letters"/>
            <Nav />
            <ContactInfo />
            <SocialMediaIcons />
        </footer>
    )
}

export default Footer;