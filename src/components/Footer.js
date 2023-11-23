import React from 'react';
import Socials from './Socials'
import Logo from '../img/header/logo.svg'
import MobileNav from './MobileNav'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ImPhone } from 'react-icons/im';

const Footer = () => {
  const location = useLocation();
  var isMatched
  return (
      <footer className='px-[30px] w-full lg:px-[100px] h-[60px] z-30 hover:bg-[#eef7f9] transition-all duration-500'>
          <div className="flex flex-col h-full items-center justify-center">    
            <span class="font-bold text-xl">Lam Bui Photography</span>
            <div className="flex flex-row">
              <ImPhone/>
              <span class="font-bold text-sm ml-2">  096222222</span>
            </div>
        </div>
      </footer>
  );
};

export default Footer;
