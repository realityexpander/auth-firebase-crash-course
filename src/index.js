import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css"

// React Authentication Crash Course With Firebase And Routing
// https://www.youtube.com/watch?v=PKwu15ldZ7k
// https://github.com/WebDevSimplified/React-Firebase-Auth/blob/master/src/contexts/AuthContext.js

// Firebase Dashboard
//   https://console.firebase.google.com/u/0/
// Authentication
//   https://console.firebase.google.com/u/5/project/auth-dev-adccf/authentication/users

// Netlify dashboard
//   https://app.netlify.com/sites/competent-turing-21b845/overview
// Deployed Site
//   https://competent-turing-21b845.netlify.app/login


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
  
  // <React.StrictMode>
  // </React.StrictMode>,
