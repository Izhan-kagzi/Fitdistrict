import { useEffect, useRef, useState } from 'react'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

const stats = [
  { target: 500, suffix: '+', label: 'Members' },
  { target: 10,  suffix: '+', label: 'Expert Trainers' },
  { target: 5,   suffix: '+', label: 'Years Experience' },
  { target: 20,  suffix: '+', label: 'Programs' },
]

const classes = [
  { img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000', label: 'Body Building' },
  { img: 'https://images.unsplash.com/photo-1606328500899-38351f33df8a?w=600&auto=format&fit=crop&q=60', label: 'Weight Lifting' },
  { img: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1000', label: 'Cardio' },
]

const plans = [
  {
    name: 'BEGINNER PLAN', price: '$500 / month',
    features: ['Personal Trainer', 'Convenient Time', 'Special Class', 'Group Training', 'Free Fitness Training'],
  },
  {
    name: 'STANDARD PLAN', price: '$1099 / month',
    features: ['Personal Trainer', 'Convenient Time', 'Special Class', 'Group Training', 'Access To Special Equipments'],
  },
  {
    name: 'PREMIUM PLAN', price: '$2099 / month',
    features: ['Personal Trainer', 'Flex Timing', 'Special Class', 'Group Training', 'Access To Special Equipments', '24/7 Access To Gym'],
  },
]

function StatsCounter() {
  const [counts, setCounts] = useState(stats.map(() => 0))
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        stats.forEach((s, i) => {
          let current = 0
          const steps = 60
          const inc = s.target / steps
          const timer = setInterval(() => {
            current += inc
            if (current >= s.target) {
              current = s.target
              clearInterval(timer)
            }
            setCounts(prev => {
              const next = [...prev]
              next[i] = Math.floor(current)
              return next
            })
          }, 2000 / steps)
        })
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats" ref={ref}>
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-number">{counts[i]}{s.suffix}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Loader />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-sub">WITH PROFESSIONAL TRAINERS</div>
          <h1>BUILD PERFECT BODY SHAPE FOR GOOD AND HEALTHY LIFE.</h1>
          <div className="hero-buttons">
            <Link to="/contact" className="btn">JOIN NOW</Link>
            <a href="#plans" className="btn-outline">VIEW PLANS</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section">
        <img src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1974" alt="trainer" />
        <div>
          <div className="section-sub">ABOUT OUR GYM</div>
          <div className="section-title">SAFE BODY BUILDING PROPER SOLUTIONS</div>
          <p>We provide professional gym training with modern equipment and expert trainers to help you reach your fitness goals safely and efficiently.[cite: 2]</p>
          <p>Our programs are designed for beginners and professionals with flexible membership plans and personal coaching.[cite: 2]</p>
          <Link to="/about" className="btn" style={{ marginTop: '20px' }}>READ MORE</Link>
        </div>
      </section>

      {/* STATS */}
      <StatsCounter />

      {/* SERVICES */}
      <section className="services">
        <div className="section-sub">OUR SERVICES FOR YOU</div>
        <div className="section-title">PUSH YOUR LIMITS FORWARD</div>
        <div className="cards">
          <div className="card"><h3>QUALITY EQUIPMENT</h3><p>Modern machines and world-class equipment.</p></div>
          <div className="card"><h3>HEALTH CARING</h3><p>Professional trainers with diet plans.</p></div>
          <div className="card"><h3>GYM STRATEGIES</h3><p>Personalized workout strategies.</p></div>
        </div>
      </section>

      {/* WORKOUT CLASSES */}
      <section className="classes">
        <div className="section-sub">OUR CLASSES</div>
        <div className="section-title">
          <span style={{ color: '#ff1f1f' }}>FITDISTRICT</span> WORKOUT CLASSES
        </div>
        <div className="class-grid">
          {classes.map((c, i) => (
            <div className="class-card" key={i}>
              <img src={c.img} alt={c.label} />
              <div className="class-label">{c.label}</div>
            </div>
          ))}
        </div>
        <Link to="/gallery" className="view-all-link">VIEW ALL CLASSES →</Link>
      </section>

      {/* MEMBERSHIP */}
      <section className="services-white" id="plans">
        <div className="section-sub">MEMBERSHIP PLANS</div>
        <div className="section-title">CHOOSE YOUR PLAN</div>
        <div className="cards">
          {plans.map((p, i) => (
            <div className="card" key={i}>
              <h3>{p.name}</h3>
              <h2 style={{ color: '#ff1f1f', fontSize: '24px', margin: '10px 0' }}>{p.price}</h2>
              {p.features.map((f, j) => <p key={j}>→ {f}</p>)}
              
              {/* Updated Dynamic Link Button */}
              <Link 
                to={`/plan/${p.name.split(' ')[0].toLowerCase()}`} 
                className="btn-small"
                style={{
                  marginTop: '20px', 
                  display: 'inline-block',
                  background: '#ff1f1f', 
                  color: 'white', 
                  padding: '10px 20px', 
                  borderRadius: '5px',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                VIEW DETAILS
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="features-strip">
        <div className="features-inner">
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="28" width="10" height="8" rx="2" stroke="#cc1a1a" strokeWidth="2" fill="none"/>
                <rect x="14" y="24" width="4" height="16" rx="1" stroke="#cc1a1a" strokeWidth="2" fill="none"/>
                <rect x="18" y="30" width="28" height="4" rx="1" stroke="#cc1a1a" strokeWidth="2" fill="none"/>
                <rect x="46" y="24" width="4" height="16" rx="1" stroke="#cc1a1a" strokeWidth="2" fill="none"/>
                <rect x="50" y="28" width="10" height="8" rx="2" stroke="#cc1a1a" strokeWidth="2" fill="none"/>
                <path d="M16 44 Q24 38 36 40 L48 42 Q50 48 44 50 L18 50 Q14 50 14 46 Z" stroke="#cc1a1a" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="feature-text">
              <h3>Thousands of Equipments</h3>
              <p>Modern machines and world-class equipment for every fitness level and training goal.[cite: 2]</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="22" width="44" height="32" rx="2" stroke="#cc1a1a" strokeWidth="2" fill="none"/>
                <rect x="18" y="32" width="10" height="12" rx="1" stroke="#cc1a1a" strokeWidth="2" fill="none"/>
                <rect x="36" y="32" width="10" height="12" rx="1" stroke="#cc1a1a" strokeWidth="2" fill="none"/>
                <path d="M10 22 L32 10 L54 22" stroke="#cc1a1a" strokeWidth="2" fill="none"/>
                <rect x="26" y="14" width="12" height="8" rx="1" stroke="#cc1a1a" strokeWidth="1.5" fill="none"/>
                <line x1="10" y1="54" x2="54" y2="54" stroke="#cc1a1a" strokeWidth="2"/>
              </svg>
            </div>
            <div className="feature-text">
              <h3>Open 24/7 FitDistrict Gym Fitness</h3>
              <p>We never close. Train at any hour that suits your schedule, any day of the year.[cite: 2]</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="18" width="24" height="36" rx="4" stroke="#cc1a1a" strokeWidth="2" fill="none"/>
                <rect x="24" y="12" width="16" height="8" rx="2" stroke="#cc1a1a" strokeWidth="2" fill="none"/>
                <line x1="20" y1="28" x2="44" y2="28" stroke="#cc1a1a" strokeWidth="1.5"/>
                <path d="M35 32 L30 40 L33 40 L29 50 L38 38 L34 38 Z" stroke="#cc1a1a" strokeWidth="1.5" fill="none"/>
                <rect x="44" y="34" width="12" height="18" rx="3" stroke="#cc1a1a" strokeWidth="1.5" fill="none"/>
                <rect x="46" y="30" width="8" height="5" rx="1.5" stroke="#cc1a1a" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <div className="feature-text">
              <h3>Food Supplements</h3>
              <p>Expert-recommended nutrition and supplement plans to support your training and recovery.[cite: 2]</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}