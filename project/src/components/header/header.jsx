import React from 'react';
import {NavLink} from 'react-router-dom';
import {AppRoutes} from '../../const';

function PageHeader() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <NavLink
              className="header__logo-link"
              to={AppRoutes.MAIN}
              isActive={(match, {pathname}) => !match ? false : pathname === AppRoutes.MAIN}
              activeClassName="header__logo-link--active"
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </NavLink>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <NavLink
                  className="header__nav-link header__nav-link--profile"
                  to={AppRoutes.LOGIN}
                  isActive={(match, {pathname}) => !match ? false : pathname === AppRoutes.LOGIN}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__login">Sign in</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
