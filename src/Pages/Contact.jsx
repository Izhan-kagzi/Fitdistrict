import { useState } from 'react'
import Loader from '../components/Loader'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <>
      <Loader />
      <section className="contact-page">
        <div className="contact-grid">

          <div className="contact-info">
            <h2>GET IN TOUCH</h2>
            <p>Have questions about memberships, trainers, or plans? Reach out to us and we'll respond quickly.</p>
            <div className="info-box">
              <h4>📍 Address</h4>
              <p>Surat, Gujarat, India</p>
            </div>
            <div className="info-box">
              <h4>📞 Phone</h4>
              <p>+91 987** ****1</p>
            </div>
            <div className="info-box">
              <h4>✉ Email</h4>
              <p>fitdistrict@yahoo.com</p>
            </div>
          </div>

          <div className="contact-form-box">
            <h2>SEND MESSAGE</h2>
            {sent && (
              <div style={{ background: 'rgba(0,255,153,0.1)', color: '#00ff99', padding: '12px', borderRadius: '6px', marginBottom: '20px', textAlign: 'center', fontFamily: 'Oswald, sans-serif', letterSpacing: '1px' }}>
                ✔ Message sent successfully!
              </div>
            )}
            <form onSubmit={submit}>
              <div className="input-group">
                <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handle} required />
              </div>
              <div className="input-group">
                <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handle} required />
              </div>
              <div className="input-group">
                <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handle} required />
              </div>
              <div className="input-group">
                <textarea name="message" placeholder="Your Message" rows="5" value={form.message} onChange={handle} required></textarea>
              </div>
              <button type="submit" className="contact-btn">Send Message</button>
            </form>
          </div>

        </div>
      </section>
    </>
  )
}
