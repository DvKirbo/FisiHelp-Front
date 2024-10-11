import CanchaFisiCard from '../Reserva/components/Cards/Card_cancha_reserva';
import CapillaFisiCard from '../Reserva/components/Cards/Card_capilla_reserva';
import SalonFisiCard from '../Reserva/components/Cards/Card_salon_reserva';
import AuditorioFisiCard from '../Reserva/components/Cards/Card_auditorio_reserva';
import AutoPlay from "./components/Carrusel/Carrusel_reserva";
import "./Reserva.css"
import MyCalendar from '../../components/Calendar/Calendar';
import { Button } from '@mui/material';

function Reserva() {
  return (
    <>
      <AutoPlay />

      <div className='cards-reserva'>
       <CanchaFisiCard />
        <CapillaFisiCard />
        <AuditorioFisiCard />
        <SalonFisiCard />
      </div>
      <div>
        <Button variant="contained" color="primary" href="/reservas"
          sx={{
            marginBottom: "2em",
            height: "3em",
            width: "20em",
          }}
        >Reservar ahora</Button>
      </div>


      {/* 
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 2 }}>
        <CanchaFisiCard />
        <CapillaFisiCard />
        <AuditorioFisiCard />
        <SalonFisiCard />
      </Box> */}

    </>
  );
}

export default Reserva;