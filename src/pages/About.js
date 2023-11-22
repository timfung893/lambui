import React from 'react';
import BomImg from '../img/photos/home.jpg'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className='section'>
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row lg:text-left lg:pt-36 h-full items-center 
        justify-center gap-x-24 text-center">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={BomImg} alt="" />
          </div>
          <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className='h1'>About me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus explicabo libero, voluptatibus temporibus, eveniet doloribus voluptates aliquam incidunt molestiae dignissimos! Voluptatibus, ipsa fugit quidem ad vel vero culpa natus.</p>
            <br />
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fuga laudantium perspiciatis dicta nisi quam. Soluta ut quis maiores labore.</p>
            <Link to={'/portfolio'} className='btn mb-[30px] max-w-50 mt-5'>View my work</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
