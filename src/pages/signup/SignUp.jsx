import React, { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

import './SignUp.css'

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)
  const { signup, isPending, error } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName, thumbnail)
  }

  const handleFileChange = (e) => {
    setThumbnail(null)

    let selected = e.target.files[0]

    if (!selected) {
      setThumbnailError('Please select a file')
      return
    }

    if (!selected.type.includes('image')) {
      setThumbnailError('Please select an image file')
      return
    }

    if (selected.size > 100000) {
      setThumbnailError('Please select a file less than 100kb')
      return
    }

    console.log(selected)
    setThumbnailError(null)
    setThumbnail(selected)
  }

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
        <span>email:</span>
        <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} />
      </label>
      <label>
        <span>password:</span>
        <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
      </label>
      <label>
        <span>display name:</span>
        <input type='text' onChange={(e) => setDisplayName(e.target.value)} value={displayName} />
      </label>
      <label>
        <span>profile thumbnail:</span>
        <input type='file' onChange={handleFileChange} required />
        {thumbnailError && <div className='error'>{thumbnailError}</div>}
      </label>
      {!isPending && <button className='btn'>Sign Up</button>}
      {isPending && (
        <button className='btn' disabled>
          loading
        </button>
      )}
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default SignUp
