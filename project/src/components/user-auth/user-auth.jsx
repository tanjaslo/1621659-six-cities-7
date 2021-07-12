import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../const';
import {logout} from '../../store/api-actions';
import {getuserData} from '../../store/userData/selectors';

function UserAuth() {
  const dispatch = useDispatch();
  const user = useSelector(getuserData);

  const {email, avatarUrl} = user;

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={AppRoutes.FAVORITES}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img src={avatarUrl} alt={'user'} style={{borderRadius: '50%'}}/>
          </div>
          <span className="header__user-name user__name">{email}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to={AppRoutes.MAIN}
        >
          <span
            className="header__signout"
            onClick={handleLogoutClick}
          >
            Sign out
          </span>
        </Link>
      </li>
    </ul>
  );
}

export default UserAuth;
