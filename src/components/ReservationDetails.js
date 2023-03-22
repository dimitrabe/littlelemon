import Button from "./Button";

function ReservationDetails(props) {
    return (
        <div className="ReservationDetailsSection">
            <h1>Reservation details</h1>
            <form>
                <div className="col-left">
                    {/* I need the onChange functionality for this to work... */}
                    <input type="text" value="Name" className="myFormInput" id="userName" minLength="2" required />
                    <input type="text" value="Phone" className="myFormInput" id="userPhone" min="10" required />
                    <input type="email" value="Email" id="email" required />
                    <input type="text" value="Dietary Restrictions" className="myFormInput" id="userDiet"/>
                </div>
                <div className="col-right">
                    <select name="Seating options" id="seatingOptions">
                        <option value="Inside">Inside</option>
                        <option value="Outside">Outside</option>
                        <option value="Bar">Bar</option>
                    </select>

                    <select name="Occasion" id="occassionOptions">
                        <option value="Birthday">Birthday</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Other">Other (Please specify in the comments)</option>
                    </select>
                    <textarea value="Type your comments here" className="myFormInput" id="userComment"/>
                </div>
                <input type="checkbox" id="terms" required/>
                <label htmlFor="terms">By clicking this box, I agree with the Terms of Use and the Privacy Policy of this service.</label>
                <Button className="myButton secondary" value="Back" link="ReservationOptions" />
                <button type="submit" className="myButton primary">Confirm</button>

            </form>
        </div>
    )
}

export default ReservationDetails;