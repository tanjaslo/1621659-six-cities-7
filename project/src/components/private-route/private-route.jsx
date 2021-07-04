import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AuthorizationStatus, AppRoutes} from '../../const';

function PrivateRoute({path, exact, render, authorizationStatus}) {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        (authorizationStatus === AuthorizationStatus.AUTH)
          ? render(routeProps)
          : <Redirect to={AppRoutes.LOGIN}/>
      )}
    />
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
