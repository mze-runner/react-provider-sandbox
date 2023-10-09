import { createBrowserRouter } from 'react-router-dom';
import { ApplicationRouter, ApplicationRouterObject } from './types';

type fn = (router: ApplicationRouterObject[]) => ApplicationRouter;

export const createApplicationRouter: fn = (r) => createBrowserRouter(r);