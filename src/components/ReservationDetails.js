import Button from "./Button";
import phoneIcon from "../icons/call_FILL0_wght200_GRAD0_opsz48.svg";
import commentIcon from "../icons/comment_FILL0_wght200_GRAD0_opsz48.svg";
import dinnerIcon from "../icons/table_restaurant_FILL0_wght200_GRAD0_opsz48.svg";
import mailIcon from "../icons/mail_FILL0_wght200_GRAD0_opsz48.svg";
import personIcon from "../icons/person_FILL0_wght200_GRAD0_opsz48.svg";
import dietaryRestrIcon from "../icons/no_meals_FILL0_wght200_GRAD0_opsz48.svg";
import occasionIcon from "../icons/nightlife_FILL0_wght200_GRAD0_opsz48.svg";

import { useState } from 'react';

function ReservationDetails(props) {
    const saveTheDate = new Date(props.reservationData.selectedDate);
    const fullNameOfDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(saveTheDate);
    const fullNameOfMonth =new Intl.DateTimeFormat("en-US", { month: "long" }).format(saveTheDate);
    
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [dietRestrictions, setDietRestrictions] = useState("");
    const [seatOpt, setSeatOpt] = useState("");
    const [occasion, setOccasion] = useState("");
    const [comment, setComment] = useState("");

    const dataToBeSubmitted = {
        ...props.reservationData,
        "name" : fullName,
        "phone" : phone,
        "email" : email,
        "dietRestrictions" : dietRestrictions,
        "seatingOptions" : seatOpt,
        "occasion" : occasion,
        "comment" : comment,
    };

    // console.log(dataToBeSubmitted);

    return (
        <div className="ReservationDetailsSection">
            <form onSubmit={e => props.submitReservationDetails(e, dataToBeSubmitted)}>
                <div className="flex-container">
                    <h1 className="dark_gray_text">Reservation details</h1>
                    <div className="flexbox-row">
                        <p>{props.reservationData.numberOfPeople} people</p>
                        <p>{`${fullNameOfDay}  ${saveTheDate.getDate()} ${fullNameOfMonth} ${saveTheDate.getFullYear()}`}</p>
                        <p>{props.reservationData.selectedTime}</p>
                    </div>
                </div>

                <div className="flex-container space-center">
                    <div className="flexbox-col take-the-full-container">
                        <input type="text" placeholder="Name" className="myFormInput lead-text light_gray dark_gray_text" id="userName"  style={{ backgroundImage: `url(${personIcon})`}} 
                            value={fullName} onChange={e => setFullName(e.target.value)} minLength="2" required />
                        <input type="text" placeholder="Phone" className="myFormInput lead-text light_gray dark_gray_text" id="userPhone" style={{ backgroundImage: `url(${phoneIcon})`}} 
                            value={phone} onChange={e => setPhone(e.target.value)} min="10" required />
                        <input type="email" placeholder="Email" className="myFormInput lead-text light_gray dark_gray_text" id="email" style={{ backgroundImage: `url(${mailIcon})`}} 
                            value={email} onChange={e => setEmail(e.target.value)} required />
                        <input type="text" placeholder="Dietary Restrictions" className="myFormInput lead-text light_gray dark_gray_text" id="userDiet" style={{ backgroundImage: `url(${dietaryRestrIcon})`}}
                            value={dietRestrictions} onChange={e => setDietRestrictions(e.target.value)}/>
                    </div>
                    <div className="flexbox-col take-the-full-container">
                        <select name="Seating options" className="myFormInput lead-text light_gray dark_gray_text" id="seatingOptions" style={{ backgroundImage: `url(${dinnerIcon})`}}
                            value={seatOpt} onChange={e => setSeatOpt(e.target.value)}>
                            <option value="0">Seating options</option>
                            <option value="Inside">Inside</option>
                            <option value="Outside">Outside</option>
                            <option value="Bar">Bar</option>
                        </select>

                        <select name="Occasion" className="myFormInput lead-text light_gray dark_gray_text" id="occassionOptions" style={{ backgroundImage: `url(${occasionIcon})`}}
                            value={occasion} onChange={e => setOccasion(e.target.value)}>
                            <option value="0">Occasion</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Engagement">Engagement</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Other">Other (Please specify in the comments)</option>
                        </select>
                        <textarea placeholder="Type your comments here" className="myFormInput lead-text light_gray dark_gray_text" id="userComment"  style={{ backgroundImage: `url(${commentIcon})`}}
                            value={comment} onChange={e => setComment(e.target.value)}/>

                    </div>
                </div>
                <div className="flex-container space-center">
                    <div className="flexbox-row">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms" className="dark_gray_text lead-text">By clicking this box, I agree with the Terms of Use and the Privacy Policy of this service.</label>
                    </div>
                </div>
                <div className="flex-container space-end">
                    <div className="flexbox-row ">
                        <Button className="myButton secondary" value="Back" link="/ReservationOptions" />
                        <button type="submit" className="myButton primary">Confirm</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ReservationDetails;