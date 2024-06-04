import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import { ThemeProvider } from '@material-tailwind/react';
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';
import { Home, SignUp, Login } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signup',
    element: <SignUp />
  }
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={ } />
    </ThemeProvider>
  </React.StrictMode>,
)
