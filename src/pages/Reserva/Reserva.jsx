import * as React from 'react';
import Box from '@mui/material/Box';
import CanchaFisiCard from '../Reserva/components/Cards/Card_cancha_reserva';
import CapillaFisiCard from '../Reserva/components/Cards/Card_capilla_reserva';
import SalonFisiCard from '../Reserva/components/Cards/Card_salon_reserva';
import AuditorioFisiCard from '../Reserva/components/Cards/Card_auditorio_reserva';
import AutoPlay from "./components/Carrusel/Carrusel_reserva";

function Reserva() {
  return (
    <>
      <AutoPlay />

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 2 }}>
        <CanchaFisiCard />
        <CapillaFisiCard />
        <AuditorioFisiCard />
        <SalonFisiCard />
      </Box>
    </>
  );
}

export default Reserva;