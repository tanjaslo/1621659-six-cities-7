import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {getAuthorizationStatus} from '../../store/user-data/selectors';

function PrivateRoute({path, exact, render, status, redirect}) {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        (authorizationStatus === status)
          ? render(routeProps)
          : <Redirect to={redirect}/>
      )}
    />
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired,
};

export default PrivateRoute;
