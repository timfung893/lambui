import React from 'react';
import Socials from './Socials'
import Logo from '../img/header/logo.svg'
import MobileNav from './MobileNav'
import { NavLink, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] h-[100px] lg:h-[140px] flex items-center z-30 hover:bg-[#eef7f9] transition-all duration-500'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <NavLink to={'/'} className='max-w-[200px] '>
          <div className='flex items-center gap-x-2'>
            <img src={Logo} className="w-12" alt=""/>
            <span className='font-bold text-xl'>Lam Bui</span>
          </div>
        </NavLink>
        <nav className='hidden lg:flex justify-between gap-x-12 font-semibold'>
          <NavLink to={'/'} className='text-[#696c6d] hover:text-primary transition '>
            Home
          </NavLink>
          <NavLink to={'/about'} className='text-[#696c6d] hover:text-primary transition'>
            About
          </NavLink>
          <NavLink to={'/portfolio'} exact activeClassName="text-bold" className='text-[#696c6d] hover:text-primary transition '   activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}>
            Works
          </NavLink>
          <NavLink to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>
            Contact
          </NavLink>
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
