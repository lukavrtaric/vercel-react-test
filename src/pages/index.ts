import { lazy } from 'react';

export const Home = lazy(() => import('pages/home-page/HomePage'));
export const Query = lazy(() => import('pages/query-page/QueryPage'));
export const Table = lazy(() => import('pages/table-page/TablePage'));
