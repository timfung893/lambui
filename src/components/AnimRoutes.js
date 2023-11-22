import React from 'react';
import Home from '../pages/Home'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import { Routes, Route, useLocation} from 'react-router-dom'

const AnimRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/portfolio' element={<Portfolio/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
  );
};

export default AnimRoutes;