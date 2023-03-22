import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ReservationOptions from  "./components/ReservationOptions"
import ReservationAlt from './components/ReservationAlt';
import ReservationDetails from './components/ReservationDetails';
import ConfirmationPage from './components/ConfirmationPage';

function App() {
  return (
    <>
    <Header />
    <Main />
    {/* <ReservationOptions />
    <ReservationAlt />
    <ReservationDetails/>
    <ConfirmationPage /> */}
    <Footer />

    </>
  );
}

export default App;
