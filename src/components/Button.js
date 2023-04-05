function Button(props){
    return(
        <a href={props.link} className={`${props.className}`}>{props.value}</a>
    )
}
export default Button;