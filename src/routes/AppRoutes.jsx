import { Routes, Route } from 'react-router-dom';
import UnayoeReserv from '../pages/Unayoe/UnayoeReserv';
import Home from '../pages/Home';  
import Login from '../components/login/Login';
function AppRoutes() {
  return (
    <Routes>
      <Route path="/unayoe" element={<UnayoeReserv />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;