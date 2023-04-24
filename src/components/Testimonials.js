import Button from "./Button";
import Card from "./Card";
import michaelM from "../images/michaelM.jpg";
import lucasK from "../images/lucasK.jpg"
import sophiaL from "../images/sophiaL.jpg";
import starFullIcon from "../icons/star_full_yellow.svg";
import starBorderIcon from "../icons/star_border_yellow.svg";

const buttonText = null;
const buttonVisible = false;
const numOfIcons = 5;

const IconsInARow = (numOfIcons, numOfFull) => {
    return (
        <div className="flexbox-row">
            <img className="small-icon" src={starFullIcon} alt="Star yellow full." />
            <img className="small-icon" src={starFullIcon} alt="Star yellow full." />
            <img className="small-icon" src={starFullIcon} alt="Star yellow full." />
            <img className="small-icon" src={starFullIcon} alt="Star yellow full." />
            <img className="small-icon" src={starFullIcon} alt="Star yellow full." />
        </div>
    );
}

const cardBgColor = "light_gray";
const cardTxtColor = "dark_gray_text";
const cardDirection = "card-row";

const cardItems = [
    {
        id: 1,
        title: "Michael M.",
        description: "The best value-for-money food in town.",
        imageSrc: michaelM,
        avatar: true,
        button: buttonText,
        buttonVisible: buttonVisible,
        icon: null,
        iconVisible: false,
    },
    {
        id: 2,
        title: "Lucas K.",
        description: "Awesome! I want to eat here every day!",
        imageSrc: lucasK,
        avatar: true,
        button: buttonText,
        buttonVisible: buttonVisible,
        icon: null,
        iconVisible: false,
    },
    {
        id: 3,
        title: "Sophia L.",
        description: "No need to cook ever again!",
        imageSrc: sophiaL,
        avatar: true,
        button: buttonText,
        buttonVisible: buttonVisible,
        icon: null,
        iconVisible: false,
    }
];

const mappedCardItems = cardItems.map(theItem => {
    return (
        <Card key={theItem.id} title={theItem.title} description={theItem.description} imageSrc={theItem.imageSrc} avatar={theItem.avatar}
            button={theItem.button} buttonVisible={theItem.buttonVisible} icon={theItem.icon} iconVisible={theItem.iconVisible}
            bgColor={cardBgColor} color={cardTxtColor} direction={cardDirection}/>
    )
})


function Testimonials(props) {
    return (
        <section className={`${props.color}`}>
            <h1 className="yellow_text text-align-center">Testimonials</h1>
            <div className="flex-container">
                {mappedCardItems}
                {/* <IconsInARow /> */}
            </div>
        </section>
    )
}

export default Testimonials;