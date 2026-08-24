import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
      setUser({username: username.trim(), password})
    }
  return (
    <div className="login-panel">
        <div className="panel-heading">
          <span className="panel-number">01</span>
          <h2>Sign in</h2>
        </div>
        <p className="panel-copy">Enter your details to update the shared profile.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="ali"
          autoComplete="username"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          autoComplete="current-password"
          required
        />
        <button type="submit">Continue <span aria-hidden="true">-&gt;</span></button>
      </form>
    </div>
  )
}

export default Login