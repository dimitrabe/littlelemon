function Button(props){
    return(
        <a href={props.link} className={`${props.className} lead-text`}>{props.value}</a>
    )
}
export default Button;