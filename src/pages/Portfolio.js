import React from 'react';
import BomImg from '../img/photos/bomBanner.jpg'
import { Link } from 'react-router-dom';
import Image1 from '../img/portfolio/1.png'
import Image2 from '../img/portfolio/2.png'
import Image3 from '../img/portfolio/3.png'
import Image4 from '../img/portfolio/4.png'
import Image5 from '../img/portfolio/5.png'
import Image6 from '../img/portfolio/6.png'

const Portfolio = () => {
  return (
    <section className='section'>
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center 
        justify-stat gap-x-24 text-center">
          <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className='h1'>My work</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus explicabo libero, voluptatibus temporibus, eveniet doloribus voluptates aliquam incidunt molestiae dignissimos! Voluptatibus, ipsa fugit quidem ad vel vero culpa natus.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fuga laudantium perspiciatis dicta nisi quam. Soluta ut quis maiores labore.</p>
            <Link to={'/contact'} className='btn mb-[30px] max-w-50 mt-5'>Send me an email</Link>
          </div>
          <div className="grid grid-cols-2 lg:gap-2">
            <div className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image1} alt="" />
            </div>
            <div className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image2} alt="" />
            </div>
            <div className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image3} alt="" />
            </div>
            <div className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image4} alt="" />
            </div>
            <div className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image5} alt="" />
            </div>
            <div className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
