import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>ABOUT US</h3>
          <p>Modern fitness training with expert trainers.</p>
        </div>
        <div className="footer-col">
          <h3>QUICK LINKS</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h3>CONTACT</h3>
          <p>Surat, Gujarat, India</p>
          <p>fitdistrict@yahoo.com</p>
          <p>+91 987** ****1</p>
        </div>
      </div>
      <div className="footer-bottom">© 2026 FitDistrict</div>
    </footer>
  )
}
