import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layouts from './Layouts.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      // {
      //   path: '',
      //   element: <Home />
      // },
      {
        path: 'about',
        element: <AboutUs />
      },
      {
        path: 'contact',
        element: <ContactUs />
      },
      {
        path: 'header',
        element: <Header />
      },

      {
        path: 'footer',
        element: <Footer />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
