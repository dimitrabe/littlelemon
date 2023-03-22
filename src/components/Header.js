import logo from "../images/Logo.svg";

import Nav from "./Nav";

function Header(props){
    return(
        <header>
            <img src={logo} alt="The liitle lemon logo consists of a yellow lemon on the left and right next to it, it is written 'Little Lemon' in capital letters"/>
            <Nav/>
        </header>
    )
}

export default Header;