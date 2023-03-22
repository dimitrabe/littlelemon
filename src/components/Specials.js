import Button from "./Button";
import Card from "./Card";
import greekSalad from "../images/greekSalad.jpg";
import bruschetta from "../images/bruschetta.svg"
import lemonDessert from "../images/lemonDessert.jpg";
import scooterIcon from "../icons/scooterIcon.svg";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Ti na kanw me to papi sto order a delivery??? Na to valw sto button kateutheian?
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const buttonText = "Order a delivery";


const cardItems = [
    {   id: 1,
        title: "Greek salad",
        description: "The famous greek salad of red tomatoes, cucumbers, peppers, olives, and our Chicago style feta cheese with crunchy garlic and rosemary croutons.",
        imageSrc: greekSalad,
        button: buttonText,
        icon: scooterIcon
    },
    {   id: 2,
        title: "Bruschetta",
        description: "The famous greek salad of red tomatoes, cucumbers, peppers, olives, and our Chicago style feta cheese with crunchy garlic and rosemary croutons. ",
        imageSrc: bruschetta,
        button: buttonText,
        icon: scooterIcon
    },
    {   id: 3,
        title: "Lemon Dessert",
        description: "The famous greek salad of red tomatoes, cucumbers, peppers, olives, and our Chicago style feta cheese with crunchy garlic and rosemary croutons.",
        imageSrc: lemonDessert,
        button: buttonText,
        icon: scooterIcon
    }
];

const mappedCardItems = cardItems.map(theItem => {
    return (
        <Card  key={theItem.id} title={theItem.title} description={theItem.description} imageSrc={theItem.imageSrc} button={theItem.button} icon={theItem.icon}/>
    )
  })


function Specials(props){
    return(
        <div className="heroSection">
            <h1>This week's specials</h1>
            <Button className="myButton primary" value="Order Online"/>
            <div className="grid">
                {mappedCardItems}
            </div>
        </div>
    )
}

export default Specials;