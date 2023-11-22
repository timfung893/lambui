import React from 'react';
import Socials from './Socials'
import Logo from '../img/header/logo.svg'
import MobileNav from './MobileNav'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] h-[100px] lg:h-[140px] flex items-center z-30'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <Link to={'/'} className='max-w-[200px]'>
          <div className='flex items-center gap-x-2'>
            <img src={Logo} className="w-12" alt=""/>
            <span className='font-bold text-xl'>Bom Photos</span>
          </div>
        </Link>
        <nav className='hidden lg:flex justify-between gap-x-12 font-semibold'>
          <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>
            Home
          </Link>
          <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>
            About
          </Link>
          <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition'>
            Portfolio
          </Link>
          <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>
            Contact
          </Link>
        </nav>
      </div>
      {/* Socials */}
      <Socials/>

      {/* Mobile Nav */}
      <MobileNav/>
    </header>
  );
};

export default Header;
