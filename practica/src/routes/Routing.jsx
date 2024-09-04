import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../page/login';
import Registro from '../page/registro';
import Home from '../page/home';
import Contacto from '../page/contacto';


const Routing = () => {
  return (
    <Router>
     <Routes>
       <Route path="/Login" element={<Login />} />
       <Route path="/Registro" element={<Registro />} />
       <Route path='/Home' element={<Home />} />
       <Route path='/Contacto' element={<Contacto />} />
     </Routes>
    </Router>
   );
};
export default Routing;

