import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import UpdateProfile from './UpdateProfile';
import PrivateRoute from './PrivateRoute';
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
      <Container 
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: '400px' }} >
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/update-profile" component={UpdateProfile} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    
  )
}

export default App;
