import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page-shell auth-shell">
      <section className="auth-layout">
        <div className="auth-intro">
          <p className="eyebrow"><span className="pulse-dot" /> Welcome back</p>
          <h1>Pick up where <span>you left off.</span></h1>
          <p className="page-lede">Sign in to continue exploring the routing playground and keep your projects moving.</p>
          <div className="auth-note"><span>✓</span><p><strong>Demo-friendly by design</strong><br />This form is ready for a real authentication service.</p></div>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-heading"><span>Log in</span><small>Welcome back</small></div>
          <label htmlFor="login-email">Email address</label>
          <input id="login-email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" />
          <label htmlFor="login-password">Password</label>
          <input id="login-password" name="password" type="password" placeholder="Enter your password" required minLength="6" autoComplete="current-password" />
          <div className="auth-options"><label className="checkbox-label"><input type="checkbox" name="remember" /> Remember me</label><Link to="#">Forgot password?</Link></div>
          {submitted && <p className="form-feedback success-feedback" role="status">Demo sign-in submitted. Connect your auth service here.</p>}
          <button type="submit">Sign in <span aria-hidden="true">-&gt;</span></button>
          <p className="auth-switch">New here? <Link to="/signup">Create an account</Link></p>
        </form>
      </section>
    </div>
  )
}

export default Login
