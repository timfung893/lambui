import React from 'react';
import { ImFacebook, ImInstagram } from 'react-icons/im'
const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href='http://www.facebook.com' target='_blank' rel="noreferrer"><ImFacebook/></a>
      </li>
      <li>
        <a href='http://www.instagram.com' target='_blank' rel="noreferrer"><ImInstagram/></a>
      </li>
    </ul>
  </div>;
};

export default Socials;
