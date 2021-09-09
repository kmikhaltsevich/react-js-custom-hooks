import React from 'react'
import useInput from '../hooks/useInput'

const Inputs = () => {
  const username = useInput('')
  const password = useInput('')
  return (
    <div>
      <div className="block-input">
        <label>{username.value || 'TextField username'}</label>
        <input {...username} type="text" placeholder='username' />
      </div>
      <div className="block-input">
        <label>{password.value || 'TextField password'}</label>
        <input {...password} type="text" placeholder='password' />
      </div>
    </div>
  )
}

export default Inputs
