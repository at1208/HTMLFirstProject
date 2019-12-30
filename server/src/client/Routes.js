import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/ImpConversion';
import  MostSearch  from './pages/MostSearch';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...HomePage,
        path: '/:reqParams',
        exact: true
      },
      // {
      //   ...AdminsListPage,
      //   path: '/admins',
      //     exact: true
      // },
      {
        ...UsersListPage,
        path: '/us/users',
          exact: true
      },
      {
        ...MostSearch,
        path: '/most/mostSearch'

      },
      {
        ...UsersListPage,
        path: '/impConversion',
          exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
