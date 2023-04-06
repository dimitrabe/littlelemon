import {Link} from 'react-router-dom';

function Button(props){
    return(
        <Link to={props.link} className={`${props.className}`}>{props.value}</Link>
    )
}
export default Button;