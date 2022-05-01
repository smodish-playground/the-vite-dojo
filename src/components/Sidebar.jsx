import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'
import Avatar from './Avatar'

function Sidebar() {
  const { user } = useAuthContext()

  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <div className='user'>
          {user && (
            <>
              <Avatar src={user.photoURL} />
              <p>Hello {user.displayName}</p>
            </>
          )}
        </div>
        <nav className='links'>
          <ul>
            <li>
              <NavLink exact to='/'>
                <img src={DashboardIcon} alt='dashboard icon' />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/create'>
                <img src={AddIcon} alt='add project icon' />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
