import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Dashboard from './pages/dashboard/Dashboard'
import Project from './pages/project/Project'
import Create from './pages/create/Create'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import OnlineUsers from './components/OnlineUsers'

import './App.css'

function App() {
  const { user, authIsReady } = useAuthContext()

  return (
    <div className='App'>
      {authIsReady && (
        <Router>
          <Sidebar />
          <div className='container'>
            <Navbar />
            <Switch>
              <Route exact path='/'>
                {user && <Dashboard />}
                {!user && <Redirect to='/login' />}
              </Route>
              <Route path='/create'>
                {user && <Create />}
                {!user && <Redirect to='/login' />}
              </Route>
              <Route path='/projects/:id'>
                {user && <Project />}
                {!user && <Redirect to='/login' />}
              </Route>
              <Route path='/login'>
                {!user && <Login />}
                {user && <Redirect to='/' />}
              </Route>
              <Route path='/signup'>
                {!user && <SignUp />}
                {user && <Redirect to='/' />}
              </Route>
            </Switch>
          </div>
          {user && <OnlineUsers />}
        </Router>
      )}
    </div>
  )
}

export default App
