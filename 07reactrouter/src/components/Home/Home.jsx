import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home-shell">
            <section className="hero-panel">
                <div className="hero-copy">
                    <p className="eyebrow"><span className="pulse-dot" /> React routing playground</p>
                    <h1>Build routes that feel <span>effortless.</span></h1>
                    <p className="hero-description">
                        Explore a polished React app with nested layouts, dynamic user pages,
                        and data loaded right inside the router.
                    </p>
                    <div className="hero-actions">
                        <Link className="primary-action" to="/about">Explore the project <span aria-hidden="true">-&gt;</span></Link>
                        <Link className="secondary-action" to="/github">View GitHub</Link>
                    </div>
                    <div className="hero-stats">
                        <div><strong>04</strong><span>routes</span></div>
                        <div><strong>01</strong><span>layout</span></div>
                        <div><strong>100%</strong><span>React</span></div>
                    </div>
                </div>

                <div className="dashboard-stage" aria-label="Animated preview of the routing dashboard">
                    <div className="orbit orbit-one" />
                    <div className="orbit orbit-two" />
                    <div className="dashboard-card">
                        <div className="dashboard-topbar"><span /><span /><span /><b>route://home</b></div>
                        <div className="dashboard-content">
                            <div className="dashboard-sidebar"><i /><i /><i /><i /></div>
                            <div className="dashboard-main">
                                <div className="dashboard-heading"><span /><em /></div>
                                <div className="metric-row"><div /><div /><div /></div>
                                <div className="chart"><span /><span /><span /><span /><span /><span /></div>
                                <div className="route-line"><i /><span /><b /></div>
                            </div>
                        </div>
                    </div>
                    <div className="floating-chip chip-route">&lt;Route /&gt;</div>
                    <div className="floating-chip chip-load">loader: ready</div>
                </div>
            </section>

            <section className="feature-strip">
                <div><span className="feature-number">01</span><h2>Navigate cleanly</h2><p>Keep every view focused and easy to reach.</p></div>
                <div><span className="feature-number">02</span><h2>Load real data</h2><p>Fetch GitHub profile data through a route loader.</p></div>
                <div><span className="feature-number">03</span><h2>Learn by building</h2><p>Small routes, practical patterns, visible results.</p></div>
            </section>
        </div>
    );
}

export default Home