import { Routes, Route } from 'react-router-dom';
import UnayoeReserv from '../pages/Unayoe/UnayoeReserv';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/unayoe" element={<UnayoeReserv />} />
    </Routes>
  );
}

export default AppRoutes;