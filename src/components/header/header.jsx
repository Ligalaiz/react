import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAction } from '@root/hooks/useAction';
import logo from '@root/assets/img/logo.svg';
import logoFull from '@root/assets/img/logo--full.svg';
import './header.scss';

const Header = () => {
  const { signOutRequestAction } = useAction();
  const { search } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOutRequestAction();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="logo">
        <picture>
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
        <ul className="nav">
          <li>
            <NavLink
              className="nav__link"
              to={{
                pathname: '/',
                search: `${search}`,
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav__link nav__link--about"
              to={{
                pathname: '/about',
                search: `${search}`,
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav__link"
              to={{
                pathname: '/contacts',
                search: `${search}`,
              }}
            >
              Contacts
            </NavLink>
          </li>
          <li>
            <button
              type="button"
              className="nav__logout"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export { Header };