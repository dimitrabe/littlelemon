function Card(props){
    return(
        <div className="card">
        {/* // <Box w="100%" h="100%"  borderRadius='lg' overflow='hidden' backgroundColor="white" color="black"> */}
            <img src={props.imageSrc} alt={props.title} />
            <div className="flexbox-col">
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