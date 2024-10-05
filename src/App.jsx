import './styles/App.css'
import ResponsiveAppBar from './components/Navbar/ResponsiveAppBar'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <AppRoutes /> 
    </Router>
  );
}

export default App;
