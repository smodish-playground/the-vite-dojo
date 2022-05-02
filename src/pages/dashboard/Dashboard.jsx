import React from 'react'
import { useCollection } from '../../hooks/useCollection'

import ProjectList from '../../components/ProjectList'

import './Dashboard.css'

function Dashboard() {
  const { documents, error } = useCollection('projects')

  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      {error && <p>Error: {error.message}</p>}
      {documents && <ProjectList projects={documents} />}
    </div>
  )
}

export default Dashboard
