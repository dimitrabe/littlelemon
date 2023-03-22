import Button from "./Button";
import Card from "./Card";
import michaelM from "../images/michaelM.jpg";
import lucasK from "../images/lucasK.jpg"
import sophiaL from "../images/sophiaL.jpg";
import scooterIcon from "../icons/scooterIcon.svg";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Ti na kanw me to papi sto order a delivery??? Na to valw sto button kateutheian?
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const buttonText = null;


const cardItems = [
    {   id: 1,
        title: "Michael M.",
        description: "The best value-for-money food in town.",
        imageSrc: michaelM,
        button: buttonText,
        icon: scooterIcon
    },
    {   id: 2,
        title: "Lucas K.",
        description: "Awesome! I want to eat here every day!",
        imageSrc: lucasK,
        button: buttonText,
        icon: scooterIcon
    },
    {   id: 3,
        title: "Sophia L.",
        description: "No need to cook again!",
        imageSrc: sophiaL,
        button: buttonText,
        icon: scooterIcon
    }
];

const mappedCardItems = cardItems.map(theItem => {
    return (
        <Card  key={theItem.id} title={theItem.title} description={theItem.description} imageSrc={theItem.imageSrc} button={theItem.button} icon={theItem.icon}/>
    )
  })


function Testimonials(props){
    return(
        <div className="heroSection">
            <h1>Testimonials</h1>
            <div className="grid">
                {mappedCardItems}
            </div>
        </div>
    )
}

export default Testimonials;