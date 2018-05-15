import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Main from './Main.jsx';

const PrivateRoute = (props) => {
	<Route
    path={`${props.path}`}
    render={routeProps => {
      props.isAuthenticated ? <props.component /> : <Redirect to={{ pathname: "/login" }} />;
    }}
  />;
}