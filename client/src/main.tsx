import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import { ThemeProvider } from '@material-tailwind/react';
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';
import { Home, SignUp, Login, DashBoard } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path:"/Dashboard",
        element: <DashBoard/>
      }
    ]
  },
  {
    path: '/signup',
    element: <SignUp />
  }
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router } />
    </ThemeProvider>
  </React.StrictMode>,
)
