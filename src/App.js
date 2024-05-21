import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import SiteFooter from './Components/Common/SiteFooter';
import SiteNav from './Components/Common/SiteNav';

import HomePage from './Components/home/HomePage';
import LoginPage from './Components/auth/LoginPage';
import RegisterPage from './Components/auth/RegisterPage';


function App() {
  return (
    <div>
      <SiteNav />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <SiteFooter />  
    </div>
  );
}

export default App;
