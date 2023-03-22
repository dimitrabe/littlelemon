import Button from "./Button";

const alternatives = [
{
    id               : 28042023,
    alternativeDate  : "Monday 28th April",
    alternativeTimes : ["15.00", "16.00", "17.00"]
},
{
    id               : 29042023,
    alternativeDate : "Tuesday 29th April",
    alternativeTimes : ["15.00", "16.00", "17.00"]
}
];

const mappedItems = alternatives.map(theItem => {
    return (
        <fieldset key={theItem.id}>
            {/* find a better key???*/}
            <legend key={String(theItem.id) + String(1000)}>{theItem.alternativeDate}</legend> 
            {theItem.alternativeTimes.map((theSubItem, index) => (
                <button key={String(theItem.id) + String(index)} className="myButton options">{theSubItem}</button>
            ))}
        </fieldset>
    )
  });


function ReservationAlt(props){
    return(
        <div className="ReservationAltSection">
            <h2>Unfortunately, availability is limited for the date and time that you have selected.</h2>
            <h2>Please select an alternative or contact us at 1234567890.</h2>
            <form>
                {mappedItems}
                <Button className="myButton secondary" value="Back" link="ReservationOptions"/>
                <button type="submit" className="myButton primary">Proceed</button>
            </form>
        </div>
    )
}

export default ReservationAlt;