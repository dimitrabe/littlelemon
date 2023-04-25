function Card(props){
    return(
        <div className={`card ${props.bgColor} ${props.color} ${props.direction}`}>
            <img className={`${(props.avatar && "avatar-img") || (!props.avatar && "card-image")}`} src={props.imageSrc} alt={`A close look on a ${props.title}`} />
            <div className="card-content flexbox-col">
                <h3> {props.title} </h3>
                <p>{props.description}</p>
                {(props.iconVisible || props.buttonVisible) &&
                    <div className="flexbox-row">
                        {props.buttonVisible && <p> {props.button}</p>}
                        {props.iconVisible && <img className="small-icon" src={props.icon} alt={props.title} />}
                    </div>
                }
            </div>
        </div>
    );
};

export default Card;