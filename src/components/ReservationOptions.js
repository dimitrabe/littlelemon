import theRestaurant from "../images/restaurant.jpg";
import theRestaurant2 from "../images/restaurant chef B.jpg";
import numberOfPeopleIcon from "../icons/group_FILL1_wght200_GRAD0_opsz48.svg";
import timeIcon from "../icons/schedule_FILL0_wght200_GRAD0_opsz48.svg";
import dateIcon from "../icons/calendar_month_FILL1_wght200_GRAD0_opsz48.svg";

function ReservationOptions(props) {
    return (
        <div className="ReservationOptionsSection">
            <div className="flex-container">
                 <div id="mySlideshow" className="image-stack take-half-the-container">
                    <img src={theRestaurant} id="topSlideshow" alt="a view of the terrace of Little Lemon resturant" />
                    <img src={theRestaurant2} id="bottomSlideshow" alt="a view of the terrace of Little Lemon resturant" />
                </div>
                <div className="flexbox-col">
                    <h1 className="dark_gray_text">Reservation options</h1>
                    <form className="flexbox-col">
                        {/* I need the onChange functionality for this to work...
                         I also need the validate Form on submit to validate if all required fields are filled and valid
                         check the code from the course related to forms react_advanced\week1_lists_forms_context\src */}
                        <input type="text" className="myFormInput lead-text light_gray dark_gray_text" style={{ backgroundImage: `url(${numberOfPeopleIcon})`}} id="numOfPeople" placeholder="Number of people" min="1" required />
                        <input type="date" className="myFormInput lead-text light_gray dark_gray_text" style={{ backgroundImage: `url(${dateIcon})` }} min={new Date().toISOString().split('T')[0]} required />
                        <input type="time" className="myFormInput lead-text light_gray dark_gray_text" style={{ backgroundImage: `url(${timeIcon})` }} min="12:00" max="21:00" required />
                        <br />
                        <button type="submit" className="myButton primary align-self-end">Check availability</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ReservationOptions;