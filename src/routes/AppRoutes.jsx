import { Routes, Route } from 'react-router-dom';
import UnayoeReserv from '../pages/Unayoe/UnayoeReserv';
import Home from '../pages/Home';  
import Login from '../components/login/Login';
import Reserva from '../pages/Reserva/Reserva';
import Rectis from '../pages/Rectis/Rectificaciones';
import Forms from '../pages/Formulario/Formulario';
function AppRoutes() {
  return (
    <Routes>
      <Route path="/unayoe" element={<UnayoeReserv />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route path="/reservas" element={<Reserva />} />
      <Route path="/rectificaciones" element={<Rectis />} />
      <Route path="/formulario" element={<Forms />} />


    </Routes>
  );
}

export default AppRoutes;