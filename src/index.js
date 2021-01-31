import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css"

// React Authentication Crash Course With Firebase And Routing
// https://www.youtube.com/watch?v=PKwu15ldZ7k

// Firebase Dashboard
//   https://console.firebase.google.com/u/0/
// Authentication
//   https://console.firebase.google.com/u/5/project/auth-dev-adccf/authentication/users


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

