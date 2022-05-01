import React from 'react'

import './Avatar.css'

function Avatar({ src }) {
  return (
    <div className='avatar'>
      <img src={src} alt='user avatar' />
    </div>
  )
}

export default Avatar
