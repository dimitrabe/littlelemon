function Nav(props){
    return(
        <nav className={props.responsiveness} id={props.id}>
            <ul className={props.className}>
                <li><h3><a href="#home">Home</a></h3></li>
                <li><h3><a href="#about">About</a></h3></li>
                <li><h3><a href="#Menu">Menu</a></h3></li>
                <li><h3><a href="#reservations">Reservations</a></h3></li>
                <li><h3><a href="#order">Order Online</a></h3></li>
                <li><h3><a href="#login">Login</a></h3></li>
            </ul>
        </nav>
    )
}

export default Nav;