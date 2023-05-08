import React from 'react';
import { Logo } from './../Logo/Logo.jsx';
import { Search } from './../Search/Search.jsx';
import { HeaderIcons } from '../Header_Icons/HeaderIcons.jsx';
import s from './header.module.css';

export const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.header__wrapper}>
        <Logo className='logo' />
        <Search setSearch={() => {}} />
        <HeaderIcons />
      </div>
    </div>
  );
};