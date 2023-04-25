import logo from "../images/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Nav from "./Nav";
import { useState } from 'react';

function Header(props){

    const [hamburgerClicked, setHamburgerClicked] = useState(false);
    const [sidebarClass, setSidebarClass] = useState("hidden");
    const [ariaExpanded, setAriaExpanded] = useState(false);

    const clickHamburger = () => {
        if (!hamburgerClicked){
            setSidebarClass("visible");
            setAriaExpanded(true);
        }
        else{
            setSidebarClass("hidden");
            setAriaExpanded(false);
        }
        setHamburgerClicked(!hamburgerClicked);
    }

    return(
        <header className="header-container">
            <img src={logo} alt="The little lemon logo consists of a yellow lemon and 'Little Lemon' is written in capital letters"/>
            <button type="button" id="menubutton" aria-haspopup="true" aria-controls="expanded-menu" aria-expanded={ariaExpanded} aria-label="Menu icon also known as hamburger"
                className="hide-large dark_gray_text" onClick={clickHamburger}>
                <FontAwesomeIcon icon={faBars} size="1x" aria-hidden="true"/>
            </button>
            <Nav id="expanded-menu" className="responsiveFlexDir dark_gray_text" responsiveness={`${sidebarClass}`} onClick={()=> clickHamburger()}/>
            {/* I used this reference to set the aria tags https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-links/ */}
        </header>
    )
}

export default Header;