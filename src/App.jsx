import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './components/login/Login'; 
import ResponsiveAppBar from './components/Navbar/ResponsiveAppBar';
import UnayoeReserv from './pages/Unayoe/UnayoeReserv';
import HomePage from './pages/HomePage'; 
import Footer from './components/Footer';
import Reserva from './pages/Reserva/Reserva';
import Chatbot from './components/Chatbot/Chatbot';
import Rectis from './pages/Rectis/Rectificaciones';
import Forms from './pages/Formulario/Formulario';
function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/login' element={<Login />} />      
          <Route path='/*' element={
            <>
              <ResponsiveAppBar />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path='/reservar' element={<Reserva />} />
                  <Route path="/unayoe" element={<UnayoeReserv />} />
                  <Route path="/rectificaciones" element={<Rectis />} />
                  <Route path="/formulario" element={<Forms />} />

                  <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
              <Chatbot />
              <Footer />

            </>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;