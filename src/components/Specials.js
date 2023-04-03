import Button from "./Button";
import Card from "./Card";
import greekSalad from "../images/greekSalad.jpg";
import bruschetta from "../images/bruschetta.svg"
import lemonDessert from "../images/lemonDessert.jpg";
import scooterIcon from "../icons/scooterIcon.svg";

const buttonText = "Order a delivery";
const cardBgColor = "light_gray";
const cardTxtColor = "dark_gray_text";

const cardItems = [
    {   id: 1,
        title: "Greek salad",
        description: "The famous greek salad of red tomatoes, cucumbers, peppers, olives, and our Chicago style feta cheese with crunchy garlic and rosemary croutons.",
        imageSrc: greekSalad,
        button: buttonText,
        buttonVisible: true,
        icon: scooterIcon,
        iconVisible: true,
    },
    {   id: 2,
        title: "Bruschetta",
        description: "The famous greek salad of red tomatoes, cucumbers, peppers, olives, and our Chicago style feta cheese with crunchy garlic and rosemary croutons. ",
        imageSrc: bruschetta,
        button: buttonText,
        buttonVisible: true,
        icon: scooterIcon,
        iconVisible: true,
    },
    {   id: 3,
        title: "Lemon Dessert",
        description: "The famous greek salad of red tomatoes, cucumbers, peppers, olives, and our Chicago style feta cheese with crunchy garlic and rosemary croutons.",
        imageSrc: lemonDessert,
        button: buttonText,
        buttonVisible: true,
        icon: scooterIcon,
        iconVisible: true,
    }
];

const mappedCardItems = cardItems.map(theItem => {
    return (
        <Card  key={theItem.id} title={theItem.title} description={theItem.description} imageSrc={theItem.imageSrc}
            button={theItem.button} buttonVisible={theItem.buttonVisible} icon={theItem.icon} iconVisible={theItem.iconVisible}
             bgColor={cardBgColor} color={cardTxtColor}/>
    )
  })


function Specials(props){
    return(
        <div className={`${props.color}`}>
            <div className="flex-container">
                <h1 className="dark_gray_text">This week's specials</h1>
                <Button className="myButton primary" value="Order Online"/>
            </div>
            <div className="flex-container">
                {mappedCardItems}
            </div>
        </div>
    )
}

export default Specials;