import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppNavbar } from './AppNavbar';
import AppRoutes from './AppRoutes/AppRoutes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

function App() {
  return (
      <BrowserRouter>
        <AppNavbar/>
        <AppRoutes/>
      </BrowserRouter>
  );
}

export default App;
