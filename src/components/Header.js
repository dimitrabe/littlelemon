import logo from "../images/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Nav from "./Nav";
import { useState } from 'react';

function Header(props){

    const [hamburgerClicked, setHamburgerClicked] = useState(false);
    const [sidebarClass, setSidebarClass] = useState("hidden");

    const clickHamburger = () => {
        if (!hamburgerClicked){
            setSidebarClass("visible");
        }
        else{
            setSidebarClass("hidden");
        }
        setHamburgerClicked(!hamburgerClicked);
    }

    return(
        <header className="header-container">
            <img src={logo} alt="The little lemon logo consists of a yellow lemon on the left and right next to it, it is written 'Little Lemon' in capital letters"/>
            <Nav className="responsiveFlexDir dark_gray_text" responsiveness={`${sidebarClass}`}/>
            <FontAwesomeIcon icon={faBars} size="1x" className="hide-large dark_gray_text" onClick={clickHamburger}/>
        </header>
    )
}

export default Header;