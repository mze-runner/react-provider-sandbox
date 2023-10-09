import * as React from 'react';
// import { createBrowserRouter, RouteObject } from 'react-router-dom';
// import { Router} from '@remix-run/router';

import { createApplicationRouter, ApplicationRouterObjects } from '../@phnx';

// pages
import ExamplePage from '../Pages/ExamplePage';

// type fn = (router: RouteObject[]) => Router;

// const createApplicationRouter: fn = (r) => {
//     return createBrowserRouter(router);
// };

const router: ApplicationRouterObjects = [
    {
        path: '/',
        element: <ExamplePage />,
    },
];

export default createApplicationRouter(router);
// export default createBrowserRouter(router);