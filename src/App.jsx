
import { BrowserRouter, Form, Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import EventHandling from './components/EventHandling';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function App() {
  return (
    <div>
    
     <BrowserRouter> 

          <Navbar/>

          
     <Routes>
      <Route path='/' element={ <Navigate to="/home" /> } />
      <Route  path='home' element={ <Home></Home>} />
      <Route  path='login' element={ <Login></Login>} />
      <Route  path='Signup' element={ <Signup></Signup>} />
      <Route  path='event' element={ <EventHandling></EventHandling>} />

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
