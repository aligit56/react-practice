import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className="page-shell user-shell">
      <section className="user-card">
        <div className="user-mark">{userid?.slice(0, 1).toUpperCase()}</div>
        <div><p className="eyebrow"><span className="pulse-dot" /> Dynamic route matched</p><h1>User profile</h1><p className="user-path">/user/<strong>{userid}</strong></p><p className="page-lede">The value above came directly from the URL using <code>useParams()</code>.</p></div>
        <div className="user-check"><span>✓</span><div><strong>Route active</strong><small>Parameter resolved successfully</small></div></div>
      </section>
    </div>
  )
}

export { User as default }