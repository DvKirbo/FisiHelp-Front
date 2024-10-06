import { Routes, Route } from 'react-router-dom';
import UnayoeReserv from '../pages/Unayoe/UnayoeReserv';
import Home from '../pages/Home';  
import Login from '../components/login/Login';
import Reserva from '../pages/Reserva/Reserva';
function AppRoutes() {
  return (
    <Routes>
      <Route path="/unayoe" element={<UnayoeReserv />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reservas" element={<Reserva />} />
    </Routes>
  );
}

export default AppRoutes;