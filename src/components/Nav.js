import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

function Nav(props){
    return(
        <nav className={props.responsiveness} id={props.id} onClick={props.onClick}>
            <menu className={props.className}>
                <li><h3><Link to="/">Home</Link></h3></li>
                <li><h3><HashLink smooth to="#about">About</HashLink></h3></li>
                <li><h3><Link to="Menu">Menu</Link></h3></li>
                <li><h3><Link to="ReservationOptions">Reservations</Link></h3></li>
                <li><h3><Link to="OrderOnline">Order Online</Link></h3></li>
                <li><h3><Link to="login">Login</Link></h3></li>
            </menu>
        </nav>
    )
}

export default Nav;