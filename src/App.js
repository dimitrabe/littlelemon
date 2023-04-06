import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ReservationOptions from  "./components/ReservationOptions"
import ReservationAlt from './components/ReservationAlt';
import ReservationDetails from './components/ReservationDetails';
import ConfirmationPage from './components/ConfirmationPage';
import PageNotFound from './components/PageNotFound';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="ReservationOptions" element={<ReservationOptions/>}/>
      <Route path="ReservationAlt" element={<ReservationAlt />}/>
      <Route path="ReservationDetails" element={<ReservationDetails/>}/>
      <Route path="ConfirmationPage" element={<ConfirmationPage/>}/>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer color="green"/>
    </>
  );
}

export default App;
