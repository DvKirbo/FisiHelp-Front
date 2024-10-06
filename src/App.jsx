import './styles/App.css';
import ResponsiveAppBar from './components/Navbar/ResponsiveAppBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import AppRoutes from './routes/AppRoutes';
import Login from './components/login/Login'; 
import Footer from './components/Footer'; 

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/login' element={<Login />} />      
          <Route path='/*' element={
            <>
              <ResponsiveAppBar />
              <AppRoutes />
            </>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
