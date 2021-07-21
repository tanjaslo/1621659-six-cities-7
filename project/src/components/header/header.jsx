import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoutes, AuthorizationStatus} from '../../const';
import UserAuth from '../user-auth/user-auth';
import UserNoAuth from '../user-no-auth/user-no-auth';
import {getAuthorizationStatus} from '../../store/user-data/selectors';

function Header() {
  const authorizationStatus = useSelector(getAuthorizationStatus);

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
            {authorizationStatus === AuthorizationStatus.AUTH ? <UserAuth /> : <UserNoAuth />}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
