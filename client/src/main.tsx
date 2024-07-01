import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import { ThemeProvider } from '@material-tailwind/react';
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';
import { 
  Home, 
  SignUp, 
  Login, 
  DashBoard, 
  Sales, 
  POS,
  Purchases,
  Reports,
  Settings,
  Expenses,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: "/Dashboard",
        element: <DashBoard />
      },
      {
        path: '/Sales',
        element: <Sales />
      },
      {
        path: '/Purchases',
        element: <Purchases/>
      },
      {
        path: '/Expenses',
        element: <Expenses/>
      },
      {
        path: "/Reports",
        element: <Reports/>
      },
      {
        path: 'Settings',
        element: <Settings/>
      }
    ]
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/POS',
    element:<POS/>
  }
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
