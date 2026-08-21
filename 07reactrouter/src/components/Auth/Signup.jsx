import { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page-shell auth-shell">
      <section className="auth-layout signup-layout">
        <div className="auth-intro">
          <p className="eyebrow"><span className="pulse-dot" /> Start building</p>
          <h1>Make your next route <span>feel natural.</span></h1>
          <p className="page-lede">Create your account and turn the routing patterns in this playground into something of your own.</p>
          <div className="signup-perks"><span>01 <b>Learn by doing</b></span><span>02 <b>Build with confidence</b></span><span>03 <b>Ship clearer flows</b></span></div>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-heading"><span>Get started</span><small>It takes a minute</small></div>
          <label htmlFor="signup-name">Full name</label>
          <input id="signup-name" name="name" type="text" placeholder="Alex Morgan" required autoComplete="name" />
          <label htmlFor="signup-email">Email address</label>
          <input id="signup-email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" />
          <label htmlFor="signup-password">Create a password</label>
          <input id="signup-password" name="password" type="password" placeholder="At least 6 characters" required minLength="6" autoComplete="new-password" />
          <label className="checkbox-label"><input type="checkbox" name="terms" required /> I agree to the project terms</label>
          {submitted && <p className="form-feedback success-feedback" role="status">Demo account request submitted. Connect your auth service here.</p>}
          <button type="submit">Create account <span aria-hidden="true">-&gt;</span></button>
          <p className="auth-switch">Already have an account? <Link to="/login">Log in</Link></p>
        </form>
      </section>
    </div>
  )
}

export default Signup
