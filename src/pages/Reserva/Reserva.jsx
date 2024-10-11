
import CardPrincipal from './components/Cards/card_principal';
import AutoPlay from "./components/Carrusel/Carrusel_reserva";
import "./Reserva.css"
import MyCalendar from '../../components/Calendar/Calendar';
import Button from '@mui/material/Button';

function Reserva() {

  return (
    <>
      <AutoPlay />
      <CardPrincipal/>     
    </>
  );
}

export default Reserva;