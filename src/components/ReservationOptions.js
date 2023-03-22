import theRestaurant from "../images/restaurant.jpg";

function ReservationOptions(props){
    return(
        <div className="ReservationOptionsSection">
            <img src={theRestaurant} alt="a view of the terrace of Little Lemon resturant" />
            <h1>Reservation options</h1>
            <form>
                {/* I need the onChange functionality for this to work... */}
                <input type="text" value="Number of people" className="myFormInput" id="numOfPeople" min="1" required/>
                <input type="date" value="Date" className="myFormInput" required/>
                <input type="time" value="Time" className="myFormInput" required/>
                <button type="submit" className="myButton primary">Check availability</button>
            </form>
        </div>
    )
}

export default ReservationOptions;