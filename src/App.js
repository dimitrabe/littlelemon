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

import { useState, useReducer } from 'react';
import { fetchAPI } from './components/apis.js'; //, submitAPI 

function App() {

  const getDate = new Date();
  const today = getDate.toISOString().split('T')[0];
  // const now = getDate.getHours() + ":" + (getDate.getMinutes() < 10 ? "0" + getDate.getMinutes() : getDate.getMinutes());

  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState();

  const updateTimes = (availableTimes, action) => {
    if (action.date !== undefined && action.date !== null) {
      availableTimes = fetchAPI(new Date(action.date)); // call to API.
    }
    else {
      console.log('No date set!');
    }
    return availableTimes;
  }
  const initialTimes = ['12:00', '13:00', '14:00', '15:00'];
  const [availableTimes, setAvailableTimesDispatch] = useReducer(updateTimes, initialTimes);
  const optionsAvailableTimes = availableTimes.map((theTime, index) => <option key={index}>{theTime}</option>);

  function setSelectedDateWrapper(e) {
    console.log("lol");
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

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="ReservationOptions" element={<ReservationOptions reservationData={reservationData} editReservationData={editReservationData} />} />
      {/* <Route path="ReservationAlt" element={<ReservationAlt />}/> */}
      <Route path="ReservationDetails" element={<ReservationDetails reservationData={reservationData} />} />
      <Route path="ConfirmationPage" element={<ConfirmationPage/>}/>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer color="green"/>
    </>
  );
}

export default App;
