function ContactInfo(props){
    return(
        <ul className={props.className}>
            <li><h3>Contact</h3></li>
            <li><p>Imaginary street 12</p></li>
            <li><p>1234567890</p></li>
            <li><p><a href="littlelemon@littlelemon.com">littlelemon@littlelemon.com</a></p></li>
        </ul>
    )
}

export default ContactInfo;