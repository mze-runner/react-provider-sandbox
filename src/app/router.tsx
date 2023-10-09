import * as React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Router} from '@remix-run/router';

// pages
import ExamplePage from '../Pages/ExamplePage';

type fn = (router: RouteObject[]) => Router;

const createApplicationRouter: fn = (r) => {
    return createBrowserRouter(router);
};

const router: RouteObject[] = [
    {
        path: '/',
        element: <ExamplePage />,
    },
];

export default createApplicationRouter(router);
// export default createBrowserRouter(router);