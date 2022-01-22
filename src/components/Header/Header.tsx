import React, { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '@assets/img/logo.svg';
import logoFull from '@assets/img/logo--full.svg';
import {
  header,
  nav,
  navLi,
  navLink,
  navLinkAbout,
  logoPicture,
} from './HeaderStyle';

const Header: FC = () => {
  const { search } = useLocation();

  return (
    <header className="header" css={header}>
      <div className="logo">
        <picture css={logoPicture}>
          <source media="(max-width: 1450px)" srcSet={logo} />
          <source media="(min-width: 1450px)" srcSet={logoFull} />
          <img
            src={logoFull}
            loading="eager"
            decoding="async"
            alt="Smashing Magazine"
          />
        </picture>
      </div>
      <nav>
        <ul className="nav" css={nav}>
          <li css={navLi}>
            <NavLink
              css={navLink}
              className="nav__link"
              to={{
                pathname: '/',
                search: `${search}`,
              }}
            >
              Home
            </NavLink>
          </li>
          <li css={navLi}>
            <NavLink
              css={navLinkAbout}
              className="nav__link nav__link--about"
              to={{
                pathname: '/about',
                search: `${search}`,
              }}
            >
              About
            </NavLink>
          </li>
          <li css={navLi}>
            <NavLink
              css={navLink}
              className="nav__link"
              to={{
                pathname: '/contacts',
                search: `${search}`,
              }}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
