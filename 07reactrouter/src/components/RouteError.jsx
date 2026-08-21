import { Link, useRouteError } from 'react-router-dom'

function RouteError() {
  const error = useRouteError()
  const message = error?.status === 404
    ? 'That route does not exist.'
    : 'This page could not load right now.'

  return (
    <div className="page-shell route-error-shell">
      <section className="route-error-card">
        <span className="route-error-code">{error?.status || '500'}</span>
        <p className="eyebrow"><span className="pulse-dot" /> Route interrupted</p>
        <h1>Let’s find a <span>better path.</span></h1>
        <p className="page-lede">{message} Check the address or return to the home page and try again.</p>
        <Link className="primary-action" to="/">Back to home <span aria-hidden="true">-&gt;</span></Link>
      </section>
    </div>
  )
}

export default RouteError
