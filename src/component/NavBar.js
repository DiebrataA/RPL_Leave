import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import SignIn from './SignInstyle'
import Dashboard from '../dashboard/Dashboard'


export default function NavBar() {
    return (
        <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/signin">Login</NavLink><small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={SignIn} />
              <Route path="/signin" component={SignIn} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
}
