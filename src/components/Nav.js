import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

function Nav(props){
    return(
        <nav className={props.responsiveness} id={props.id}>
            <menu className={props.className}>
                <li role="none"><h3><Link to="/" onClick={props.onClick} role="menuitem">Home</Link></h3></li>
                <li role="none"><h3><HashLink smooth to="#about" onClick={props.onClick} role="menuitem">About</HashLink></h3></li>
                <li role="none"><h3><Link to="Menu" onClick={props.onClick} role="menuitem">Menu</Link></h3></li>
                <li role="none"><h3><Link to="ReservationOptions" onClick={props.onClick} role="menuitem">Reservations</Link></h3></li>
                <li role="none"><h3><Link to="OrderOnline" onClick={props.onClick} role="menuitem">Order Online</Link></h3></li>
                <li role="none"><h3><Link to="login" onClick={props.onClick} role="menuitem">Login</Link></h3></li>
            </menu>
        </nav>
    )
}

export default Nav;