import logo from "../images/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Nav from "./Nav";

function clickHamburger(){
    // const getStatus = document.getElementById("mySidebar").style.display;
    // if (getStatus == "none"){
    //     document.getElementById("mySidebar").style.display = 'block';
    // }else{
    //     document.getElementById("mySidebar").style.display = 'none';
    // }
    console.log('click');
}


function Header(props){
    return(
        <header className="header-container">
            <img src={logo} alt="The little lemon logo consists of a yellow lemon on the left and right next to it, it is written 'Little Lemon' in capital letters"/>
            <Nav className="flexbox-row dark_gray_text" responsiveness="hide-small hide-medium"/>
            <a href="#mySidebar" className="hide-large dark_gray_text" onClick={clickHamburger()}>
                    <FontAwesomeIcon icon={faBars} size="1x"/>
            </a>
            <Nav id="mySidebar" className="flexbox-col align-right dark_gray_text animate-right"/>
        </header>
    )
}

export default Header;