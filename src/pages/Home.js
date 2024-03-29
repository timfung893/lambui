import React from 'react';
import WomanImg from '../img/home/woman.png'
import BomImg from '../img/photos/bomBanner.jpg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions'
import Footer from '../components/Footer';

const Home = () => {
  return (
    <motion.section className='section'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}>
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className="w-full lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10 px-12">
          </motion.div>
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col justify-center">
          <motion.div 
          initial={{ opacity: 0, y: '-50%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-50%' }}
          transition={transition1}
          className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto 
          z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">photographer <br /> & image editor</h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Binh Thanh, HCM
            </p>
            <Link to={'/contact'} className='btn hover:bg-[grey] transition-all duration-500'>contact me</Link>
          </motion.div>
          <div className="flex justify-end max-h-96 lg:max-h-max"> 
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className='relative lg:-right-40 overflow-hidden'>  
              <motion.img 
              whileHover={{scale: 1.1}}
              transition={{transition1, duration: '1.5'}}
              src={BomImg} 
              alt="" 
              className='max-h-[850px]'
              />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <Footer/>  
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
