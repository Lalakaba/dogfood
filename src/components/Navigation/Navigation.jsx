import React from 'react';
import s from './Navigation.module.css';
;

export const Navigation = ({ list }) => {
  return (
    <nav className={s.footer__nav}>
      <ul className={s.footer__list}>
        {list.map((el) => {
          return (
            <li className={s.footer__list_item}>
              <a href='/#' className={s.footer__list_link}>
                {el}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
