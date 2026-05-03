import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [isLogin, setIsLogin] = useState(false); // Toggle between Login and Sign Up
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted functionality requires backend connection.");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        {/* LEFT PANEL: Branding & Steps */}
        <div className="auth-left">
          <div className="left-content">
            <h1>Get Started <br /> with Us</h1>
            <p>Complete these easy steps to register your account.</p>
            
            <div className="steps-container">
              <div className="step-item active">
                <div className="step-num">1</div>
                <span>Sign up your account</span>
              </div>
              <div className="step-item">
                <div className="step-num">2</div>
                <span>Set up your workspace</span>
              </div>
              <div className="step-item">
                <div className="step-num">3</div>
                <span>Set up your profile</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Form */}
        <div className="auth-right">
          <div className="form-container">
            <h2>{isLogin ? 'Welcome Back' : 'Sign Up Account'}</h2>
            <p className="subtitle">Enter your personal data to {isLogin ? 'access' : 'create'} your account.</p>

            <div className="social-auth">
              <button className="social-btn"><img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" /> Google</button>
              <button className="social-btn"><img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="Github" /> Github</button>
            </div>

            <div className="divider"><span>Or</span></div>

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="input-row">
                  <div className="input-group">
                    <label>First Name</label>
                    <input type="text" name="firstName" placeholder="eg. John" onChange={handleChange} required />
                  </div>
                  <div className="input-group">
                    <label>Last Name</label>
                    <input type="text" name="lastName" placeholder="eg. Francisco" onChange={handleChange} required />
                  </div>
                </div>
              )}
              
              <div className="input-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="eg. johnfrans@gmail.com" onChange={handleChange} required />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} required />
                <small>Must be at least 8 characters.</small>
              </div>

              <button type="submit" className="submit-btn">
                {isLogin ? 'Log In' : 'Sign Up'}
              </button>
            </form>

            <p className="toggle-text">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <span onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Sign Up' : 'Log in'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}