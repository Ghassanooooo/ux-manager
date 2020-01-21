import React from 'react';
import { Route } from 'react-router-dom';

const AuthRouter = ({ component: Component, ...rest }) => (
    <Route strict exact {...rest} render={props => <Component {...props} />} />
);

export default AuthRouter;
