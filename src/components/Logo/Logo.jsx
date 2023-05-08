import React from 'react';
import LogoImage from './../../assets/logo.svg';

export const Logo = () => {
  return (
    <a href='/'>
      <img src={LogoImage} alt='logo' className='logo-pic' />
    </a>
  );
};
