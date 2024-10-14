import { Routes, Route } from 'react-router-dom';
import UnayoeReserv from '../pages/Unayoe/UnayoeReserv';
import Home from '../pages/Home';  
import Login from '../components/login/Login';
import Reserva from '../pages/Reserva/Reserva';
import Rectis from '../pages/Rectis/Rectificaciones';
import Forms from '../pages/Formulario/Formulario';
import RectisListas from '../pages/Rectis/RectisListas';
import Asignaciones from "../pages/Asignacion/Asignaciones";
import Asignaciones_page from "../pages/Asignacion/Page_asignación";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/unayoe" element={<UnayoeReserv />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route path="/reservas" element={<Reserva />} />
      <Route path="/rectificaciones" element={<Rectis />} />
      <Route path="/formulario" element={<Forms />} />
      <Route path="/rectis-listas" element={<RectisListas />} />
      <Route path="/asignaciones/tabla" element={<Asignaciones/>} />
      <Route path="/asignaciones" element={<Asignaciones_page/>} />


    </Routes>
  );
}

export default AppRoutes;