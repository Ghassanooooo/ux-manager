import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthRoute from './AuthRoute';
import HomePageRouter from './public/HomePage/HomePage';
import SupplementsRouter from './public/Supplements/Supplements';
import AccountRouter from './public/Account/Account';
import AdminSupplementsRouter from './admin/AdminSupplements/AdminSupplements';
import AdminAddNewProductRouter from './admin/AdminAddNewProduct/AdminAddNewProduct';
import RedirectMiddlewareRouter from './RedirectMiddleware';

const RouterData = {
    RedirectMiddlewareRouter,
    ...AccountRouter,
    ...HomePageRouter,
    ...SupplementsRouter,
    ...AdminSupplementsRouter,
    ...AdminAddNewProductRouter,
};

const Router = () => (
    <Switch>
        {Object.keys(RouterData).map(RouteKey => {
            const RoutePrivacy = RouterData[RouteKey].auth ? AuthRoute : Route;
            return (
                <RoutePrivacy
                    key={RouterData[RouteKey].path}
                    exact
                    strict
                    path={RouterData[RouteKey].path}
                    component={RouterData[RouteKey].component}
                />
            );
        })}
    </Switch>
);

export default Router;
