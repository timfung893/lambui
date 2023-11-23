import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions'
import BomImg from '../img/photos/bomBanner.jpg'
import p1 from '../img/photos/p1.jpg'
import p2 from '../img/photos/p2.jpg'
import p3 from '../img/photos/p3.jpg'
import p4 from '../img/photos/p4.jpg'
import Image1 from '../img/portfolio/1.png'
import Image2 from '../img/portfolio/2.png'
import Image3 from '../img/portfolio/3.png'
import Image4 from '../img/portfolio/4.png'
import Image5 from '../img/portfolio/5.png'
import Image6 from '../img/portfolio/6.png'

const Portfolio = () => {
  return (
    <motion.section className='section'
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}>
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center max-h-[700px]
        justify-stat gap-x-24 text-center">
          <motion.div 
              initial={{ opacity: 0, y: '80%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '80%' }}
          className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className='h1'>My work</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus explicabo libero, voluptatibus temporibus, eveniet doloribus voluptates aliquam incidunt molestiae dignissimos! Voluptatibus, ipsa fugit quidem ad vel vero culpa natus.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fuga laudantium perspiciatis dicta nisi quam. Soluta ut quis maiores labore.</p>
            <Link to={'/contact'} className='btn mb-[30px] max-w-50 mt-5'>Send me an email</Link>
          </motion.div>
          <motion.div className="grid grid-cols-2 lg:gap-2 bg-[#eef7f9]">
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition1}
              className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden ">
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={p1} alt="" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition1}
              className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden ">
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={p2} alt="" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition1}
              className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden ">
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={p3} alt="" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition1}
              className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden ">
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={p4} alt="" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition1}
              className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden ">
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image1} alt="" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{transition1, duration: 1.2}}
              className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image2} alt="" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{transition1, duration: '1.5'}}
              className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image3} alt="" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{transition1, duration: '1.8'}}
              className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image4} alt="" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{transition1, duration: '2.1'}}
              className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image5} alt="" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{transition1, duration: '2.4'}}
              className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image6} alt="" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
