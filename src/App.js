import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ReservationOptions from "./components/ReservationOptions"
// import ReservationAlt from './components/ReservationAlt';
import ReservationDetails from './components/ReservationDetails';
import ConfirmationPage from './components/ConfirmationPage';
import PageNotFound from './components/PageNotFound';

import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { useState, useReducer, useEffect } from 'react';
import { fetchAPI, submitAPI } from './components/apis.js';

function App() {

  const getDate = new Date();
  const today = getDate.toISOString().split('T')[0];
  // const now = getDate.getHours() + ":" + (getDate.getMinutes() < 10 ? "0" + getDate.getMinutes() : getDate.getMinutes());

  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [selectedDate, setSelectedDate] = useState(today);

  const updateTimes = (availableTimes, action) => {
    if (action.date !== undefined && action.date !== null) {
      availableTimes = fetchAPI(new Date(action.date)); // call to API.
    }
    else {
      console.log('No date set!');
    }
    return availableTimes;
  }
  const initializeTimes = (getDate) => fetchAPI(getDate);
  const [availableTimes, setAvailableTimesDispatch] = useReducer(updateTimes, getDate, initializeTimes);
  const optionsAvailableTimes = availableTimes.map((theTime, index) => <option key={index}>{theTime}</option>);
  const [selectedTime, setSelectedTime] = useState(availableTimes[0]);

  function setSelectedDateWrapper(e) {
    //console.log("lol");
    setSelectedDate(e.target.value);
    setAvailableTimesDispatch({ date: e.target.value });
  }

  const reservationData = {
    "numberOfPeople": numberOfPeople,
    "selectedDate": selectedDate,
    "selectedTime": selectedTime,
    "optionsAvailableTimes": optionsAvailableTimes,
    "today": today,
  };

  const editReservationData = {
    "setNumberOfPeople": setNumberOfPeople,
    "setSelectedDateWrapper": setSelectedDateWrapper,
    "setSelectedTime": setSelectedTime,
  };

  let navigate = useNavigate();

  useEffect(() => {
    submitAPI()
  }, [])

  async function submitReservationDetails(e, data){
    e.preventDefault()
    try {
      const response = await submitAPI(data);
      if (!response) {
        throw new Error("SubmitAPI function returned false");
      }
      navigate('/ConfirmationPage');
    } catch (error) {
      alert("There has been a problem with your submit operation: " + error);
    }
  };

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="ReservationOptions" element={<ReservationOptions reservationData={reservationData} editReservationData={editReservationData} />} />
      {/* <Route path="ReservationAlt" element={<ReservationAlt />}/> */}
      <Route path="ReservationDetails" element={<ReservationDetails reservationData={reservationData} submitReservationDetails={submitReservationDetails} />} />
      <Route path="ConfirmationPage" element={<ConfirmationPage/>}/>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer color="green"/>
    </>
  );
}

export default App;
