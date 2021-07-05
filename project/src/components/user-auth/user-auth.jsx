import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../const';
import {logout} from '../../store/api-actions';

function UserAuth({email, avatarUrl, handleLogoutClick}) {
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

UserAuth.propTypes = {
  handleLogoutClick: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

const mapStateToProps = ({userData: {email, avatarUrl}}) => ({
  email,
  avatarUrl,
});

const mapDispatchToProps = {
  handleLogoutClick: logout,
};

export {UserAuth};
export default connect(mapStateToProps, mapDispatchToProps)(UserAuth);
