import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const isAdmin = localStorage.getItem('user_type') === 'admin';

  return (
    <nav>
      {/* Zone 1: Left */}
      <Link to="/" className="logo">
        <span>FIT</span>DISTRICT
      </Link>

      {/* Zone 2: Center */}
      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/contact">CONTACT</Link>
        
        {isAdmin && (
          <Link to="/admin" className="admin-link">
            DASHBOARD
          </Link>
        )}

        <Link to="/login" className="login-btn-nav">
          LOGIN
        </Link>
      </div>

      {/* Zone 3: Right (Socials Only) */}
      <div className="nav-right-actions">
        <div className="nav-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://t.me" target="_blank" rel="noreferrer" aria-label="Telegram">
            <i className="fa-brands fa-telegram"></i>
          </a>
        </div>
        {/* The triple-dash (menu-icon) has been removed from here */}
      </div>
    </nav>
  )
}