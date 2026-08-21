import { useState } from 'react'

function Contact() {
    const [status, setStatus] = useState('idle')
    const [error, setError] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget
        const formData = new FormData(form)
        const name = formData.get('name')?.trim()
        const email = formData.get('email')?.trim()
        const message = formData.get('message')?.trim()

        if (!name || !email || !message) {
            setError('Please complete every field before sending your message.')
            setStatus('error')
            return
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setError('Please enter a valid email address.')
            setStatus('error')
            return
        }

        setError('')
        setStatus('success')
        form.reset()
    }

    return (
        <div className="page-shell">
            <section className="contact-layout">
                <div className="contact-intro">
                    <p className="eyebrow"><span className="pulse-dot" /> Start a conversation</p>
                    <h1>Let’s make something <span>clear.</span></h1>
                    <p className="page-lede">Have a question about the routing examples? Send a note and we’ll get back to you.</p>
                    <div className="contact-details"><div><b>@</b><span>info@acme.org</span></div><div><b>+</b><span>+44 123 456 7890</span></div><div><b>⌖</b><span>Street, State, Postal Code</span></div></div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    <div className="form-heading"><span>Message</span><small>Typically replies within a day</small></div>
                    <label htmlFor="name">Your name</label><input id="name" name="name" type="text" placeholder="Alex Morgan" />
                    <label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="alex@example.com" />
                    <label htmlFor="message">What’s on your mind?</label><textarea id="message" name="message" rows="4" placeholder="Tell us a little about it..." />
                    {status === 'success' && <p className="form-feedback success-feedback" role="status">Message received. We’ll get back to you soon.</p>}
                    {status === 'error' && <p className="form-feedback error-feedback" role="alert">{error}</p>}
                    <button type="submit">Send message <span aria-hidden="true">-&gt;</span></button>
                </form>
            </section>
        </div>
    );
}

export default Contact