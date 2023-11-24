import React from 'react';
import BomImg from '../img/photos/home.jpg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions'
import Footer from '../components/Footer';

const About = () => {
  return (
    <motion.section 
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: '100%' }}
    transition={transition1}
    className='section'>
      <div className="container mx-auto lg:pt-32">
        <div className="flex flex-col lg:flex-row lg:text-left lg:pt-36 h-full items-center 
        justify-center gap-x-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className="lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10 px-12">
          </motion.div>
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={BomImg} alt="" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: '80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '80%' }}
            transition={transition1}
            className="flex-1 pb-12 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className='h1'>About me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus explicabo libero, voluptatibus temporibus, eveniet doloribus voluptates aliquam incidunt molestiae dignissimos! Voluptatibus, ipsa fugit quidem ad vel vero culpa natus.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fuga laudantium perspiciatis dicta nisi quam. Soluta ut quis maiores labore.</p>
            <Link to={'/portfolio'} className='btn mb-[30px] max-w-50 mt-5 hover:bg-[grey] transition-all duration-500'>View my work</Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 w-full">
          <Footer/>  
        </div>
      </div>
    </motion.section>
  );
};

export default About;
