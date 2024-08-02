import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserLayout from './layout/UserLayout.jsx'
import Home from './pages/Home.jsx'
import Aboute from './pages/Aboute.jsx'
import Services from './pages/Services.jsx'
import Error from './pages/Error.jsx'



const routing = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <Aboute />
      },
      {
        path: '/service',
        element: <Services />
      }
    ]
  },
  {
    path: '*',
    element: <Error />
  }


])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routing}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </RouterProvider>
)
