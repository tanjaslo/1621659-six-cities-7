import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../const';
import {logout} from '../../store/api-actions';
import {ActionCreator} from '../../store/action';

function UserAuth({onClick, email, avatarUrl, loadUserData}) {
  const handleClick = () => {
    onClick(logout);
    loadUserData({});
  };

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={AppRoutes.FAVORITES}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img src={avatarUrl} alt="user" />
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
            onClick={handleClick}
          >
            Sign out
          </span>
        </Link>
      </li>
    </ul>
  );
}

UserAuth.propTypes = {
  onClick: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  loadUserData: PropTypes.func.isRequired,
};

const mapStateToProps = ({userData: {email, avatarUrl}}) => ({
  email,
  avatarUrl,
});

const mapDispatchToProps = {
  onClick: logout,
  loadUserData: ActionCreator.loadUserData,
};

export {UserAuth};
export default connect(mapStateToProps, mapDispatchToProps)(UserAuth);
