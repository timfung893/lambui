import React from 'react';
import AnimRoutes from '../src/components/AnimRoutes'
import Header from '../src/components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import { motion } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <AnimRoutes/>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
