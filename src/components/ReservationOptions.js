import theRestaurant from "../images/restaurant.jpg";
import theRestaurant2 from "../images/restaurant chef B.jpg";
import numberOfPeopleIcon from "../icons/group_FILL1_wght200_GRAD0_opsz48.svg";
import timeIcon from "../icons/schedule_FILL0_wght200_GRAD0_opsz48.svg";
import dateIcon from "../icons/calendar_month_FILL1_wght200_GRAD0_opsz48.svg";
import { useNavigate } from "react-router-dom";

function ReservationOptions(props) {

    let navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        navigate('/ReservationDetails');
    }

    return (
        <section className="flex-container take-60percent-of-container space-between">
            <div id="mySlideshow" className="image-stack take-half-the-container">
                <img src={theRestaurant} id="topSlideshow" alt="a view of the terrace of Little Lemon resturant" />
                <img src={theRestaurant2} id="bottomSlideshow" alt="The chef is adding ingredients in a plate." />
            </div>
            <div className="flexbox-col">
                <h1 className="dark_gray_text">Reservation options</h1>
                <form className="flexbox-col" onSubmit={handleFormSubmit}>
                    {/* <label htmlFor="numOfPeople" >Select the number of people:</label> */}
                    <input type="text" className="myFormInput lead-text light_gray dark_gray_text" style={{ backgroundImage: `url(${numberOfPeopleIcon})`}}
                            id="numOfPeople" placeholder="Number of people" aria-label="Select number of people."
                            value={props.reservationData.numberOfPeople} onChange={e => props.editReservationData.setNumberOfPeople(e.target.value)} min="1" max="10" required />
                    {/* <label htmlFor="selectedDate">Select a date:</label> */}
                    <input type="date" id="selectedDate" className="myFormInput lead-text light_gray dark_gray_text" style={{ backgroundImage: `url(${dateIcon})` }}
                        aria-label="Select date."
                        value={props.reservationData.selectedDate} onChange={e => props.editReservationData.setSelectedDateWrapper(e)} min={props.reservationData.today} required />
                    {/* <label htmlFor="selectedTime">Select a time:</label> */}
                    <select name="time" id="selectedTime" className="myFormInput lead-text light_gray dark_gray_text" style={{ backgroundImage: `url(${timeIcon})` }}
                        aria-label="Select time."
                        value={props.reservationData.selectedTime} onChange={e => props.editReservationData.setSelectedTime(e.target.value)} min={'12:00'} required>
                            {props.reservationData.optionsAvailableTimes}
                    </select>
                    <br />
                    <button type="submit" className="myButton primary align-self-end">Book</button>
                </form>
            </div>
        </section>
    )
}

export default ReservationOptions;