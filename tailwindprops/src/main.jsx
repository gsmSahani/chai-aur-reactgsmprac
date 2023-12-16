import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import Example from './Example.jsx'
import Navigation from './Components/Navigation.jsx';
import CardTwo from './Components/CardTwo.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Example /> */}
    <Navigation />
    <CardTwo />
  </React.StrictMode>,
)
