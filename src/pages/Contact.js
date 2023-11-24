import React from 'react';
import WomanImage from '../img/contact/woman.png'
import bomContactImage from '../img/contact/bomContact.jpg'
import { motion } from 'framer-motion';
import { transition1 } from '../transitions'
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <motion.section 
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: '100%' }}
    transition={transition1}
    className='section bg-white'>
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className="lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10 px-12 my-4 lg:my-0">
          </motion.div>
          <div className="px-4">
            <h1 className='h1'>Contact me</h1>
            <p className='my-10'>Wanna work with me? Easy. Just send me a message :)</p>
            <form action="bg-pink-200 flex flex-col gap-y-4">
              <div className='flex gap-x-10'>
                <input className='outline-none border-b border-b-primary bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] h-[60px]' 
                type="text" 
                placeholder='Your name'/>
                <input className='outline-none border-b border-b-primary bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] h-[60px]' 
                type="text" 
                placeholder='Your email address'/>
              </div>
              <input className='outline-none border-b border-b-primary bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] h-[60px]' 
                type="text" 
                placeholder='Your phone number'/>
              <input className='outline-none border-b border-b-primary bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] h-[60px]' 
                type="text" 
                placeholder='Your message'/>
              <button className='btn mb-[30px] mx-auto lg:mx-0 self-start mt-6 hover:bg-[grey] transition-all duration-500'>Send</button>
            </form>
          </div>
          <motion.div 
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{transition1, duration: '1.5'}}
              className="lg:flex-1">
            <img src={WomanImage} alt="" />
          </motion.div>
        </div>
        <div className="absolute bottom-0 w-full bg-white lg:bg-transparent">
          <Footer/>  
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
