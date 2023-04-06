import Button from "./Button";
import { useNavigate } from "react-router-dom";

const alternatives = [
    {
        id: 28042023,
        alternativeDate: "Monday 28th April",
        alternativeTimes: ["15.00", "16.00"]
    },
    {
        id: 29042023,
        alternativeDate: "Tuesday 29th April",
        alternativeTimes: ["15.00", "16.00", "17.00"]
    }
];

const mappedItems = alternatives.map(theItem => {
    return (
        <fieldset key={theItem.id} className="flexbox-row take-half-the-container space-center">
            {/* find a better key???*/}
            <legend key={String(theItem.id) + String(1000)} className="section-text">{theItem.alternativeDate}</legend>
            {theItem.alternativeTimes.map((theSubItem, index) => (
                <button key={String(theItem.id) + String(index)} className="myButton options">{theSubItem}</button>
            ))}
        </fieldset>
    )
});


function ReservationAlt(props) {
    let navigate = useNavigate();

    return (
        <div className="ReservationAltSection">
           <div className="flex-container">
                <div className="flexbox-col take-the-full-container">
                    <br/>
                    <br/>
                    <h2 className="dark_gray_text text-align-center">Unfortunately, availability is limited for the date and time that you have selected.</h2>
                    <h2 className="dark_gray_text text-align-center">Please select an alternative or contact us at 1234567890.</h2>
                    <br/>
                    <form className="flexbox-col take-the-full-container align-center" onSubmit={() => {navigate('/ReservationDetails');}}>
                        {mappedItems}
                        <br/>
                        <div className="flexbox-row align-self-end">
                            <Button className="myButton secondary" value="Back" link="/ReservationOptions" />
                            <button type="submit" className="myButton primary">Proceed</button>
                        </div>
                    </form>
                </div>
             </div>
         </div>
    )
}

export default ReservationAlt;