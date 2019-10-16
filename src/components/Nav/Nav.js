import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

const ativeStyle = {
  color: 'rgb(206, 145, 15)',
};

const Nav = () => (
  <>
    <ul className={css.header}>
      <li className={css.headerItem}>
        <NavLink
          className={css.headerLink}
          to="/"
          exact
          activeStyle={ativeStyle}
        >
          Home
        </NavLink>
      </li>
      <li className={css.headerItem}>
        <NavLink className={css.headerLink} to="/pets" activeStyle={ativeStyle}>
          Pets
        </NavLink>
      </li>
      <li className={css.headerItem}>
        <NavLink
          className={css.headerLink}
          to="/about"
          activeStyle={ativeStyle}
        >
          About
        </NavLink>
      </li>
    </ul>
  </>
);

export default Nav;
