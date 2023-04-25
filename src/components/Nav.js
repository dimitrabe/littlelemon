import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

function Nav(props){
    return(
        <nav className={props.responsiveness} id={props.id}>
            <menu className={`${props.className} lead-text`}>
                <li role="none"><Link to="/" onClick={props.onClick} role="menuitem">Home</Link></li>
                <li role="none"><HashLink smooth to="#about" onClick={props.onClick} role="menuitem">About</HashLink></li>
                <li role="none"><Link to="Menu" onClick={props.onClick} role="menuitem">Menu</Link></li>
                <li role="none"><Link to="ReservationOptions" onClick={props.onClick} role="menuitem">Reservations</Link></li>
                <li role="none"><Link to="OrderOnline" onClick={props.onClick} role="menuitem">Order Online</Link></li>
                <li role="none"><Link to="login" onClick={props.onClick} role="menuitem">Login</Link></li>
            </menu>
        </nav>
    )
}

export default Nav;