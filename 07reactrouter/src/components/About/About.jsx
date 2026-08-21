function About() {
  return (
        <div className="page-shell">
            <section className="about-hero">
                <div className="about-copy">
                    <p className="eyebrow"><span className="pulse-dot" /> Inside the project</p>
                    <h1>Routing is the <span>connection</span> between ideas.</h1>
                    <p className="page-lede">This playground turns React Router concepts into a small, navigable product: shared layouts, nested views, URL parameters, and loader-driven data.</p>
                    <div className="about-points">
                        <div><strong>01</strong><span>Shared layout</span><p>Header and footer stay in place while routes change.</p></div>
                        <div><strong>02</strong><span>Dynamic routes</span><p>Try <code>/user/aligit56</code> to see URL params in action.</p></div>
                    </div>
                </div>
                <div className="code-window" aria-label="Animated React Router code preview">
                    <div className="code-bar"><i /><i /><i /><span>routes.jsx</span></div>
                    <div className="code-lines">
                        <p><b>1</b><em>const</em> router = <strong>createBrowserRouter</strong>([</p>
                        <p><b>2</b>&nbsp;&nbsp;&#123; path: <mark>"/"</mark>,</p>
                        <p><b>3</b>&nbsp;&nbsp;&nbsp;&nbsp;element: <mark>&lt;Layout /&gt;</mark>,</p>
                        <p><b>4</b>&nbsp;&nbsp;&nbsp;&nbsp;children: [</p>
                        <p><b>5</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; path: <mark>"about"</mark> &#125;,</p>
                        <p><b>6</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; path: <mark>"github"</mark> &#125;</p>
                        <p><b>7</b>&nbsp;&nbsp;&nbsp;&nbsp;]</p>
                        <p><b>8</b>&#125;</p>
                    </div>
                    <div className="code-status"><span /> router ready <b>8 routes mapped</b></div>
                </div>
            </section>
            <div className="page-banner"><span>React Router</span><strong>Learn one route at a time.</strong><span>2026 / playground</span></div>
        </div>
  );
}

export default About