import Loader from '../components/Loader'

const trainers = [
  {
    img: 'https://images.unsplash.com/photo-1696563996353-214a3690bb11?w=600&auto=format&fit=crop&q=60',
    name: 'George Teli', role: 'Strength & Bodybuilding',
  },
  {
    img: 'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Julia Rekamie', role: 'Yoga & Flexibility',
  },
  {
    img: 'https://images.unsplash.com/photo-1604480133435-25b86862d276?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd5bSUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D',
    name: 'Aaron Brogden', role: 'Cardio & Weight Loss',
  },
  {
    img: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600',
    name: 'Sneha Patel', role: 'Nutrition & Diet',
  },
]

const reviews = [
  { text: '"Amazing gym! The trainers are very supportive and I achieved my fitness goals quickly."', author: 'Rahul Sharma' },
  { text: '"Best gym experience ever. Clean environment and modern equipment."', author: 'Ayesha Khan' },
  { text: '"Highly recommended! Personal training helped me transform my body."', author: 'Arjun Patel' },
]

export default function About() {
  return (
    <div className="about-page">
      <Loader />

      {/* ABOUT HERO */}
      <section className="about-hero">
        <div className="about-text">
          <h4>ABOUT OUR GYM</h4>
          <h1>Transform Your Body, Transform Your Life</h1>
          <p>We are a premium fitness club dedicated to helping you achieve your goals. With expert trainers, modern equipment, and personalized programs, we provide a complete fitness experience.</p>
          <p>Whether you want to lose weight, gain muscle, or stay fit, our gym offers the perfect environment to push your limits and grow stronger every day.</p>
          <div className="features-list">
            {['Professional Trainers', 'Modern Equipment', 'Flexible Membership Plans', 'Personal Training'].map((f, i) => (
              <div className="feature-item-about" key={i}>✔ {f}</div>
            ))}
          </div>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80" alt="About FitDistrict" />
        </div>
      </section>

      {/* TRAINER PROFILES */}
      <section className="trainers-wrap">
        <div className="t-sub">MEET THE TEAM</div>
        <div className="t-title">OUR EXPERT TRAINERS</div>
        <div className="trainer-grid">
          {trainers.map((t, i) => (
            <div className="trainer-card" key={i}>
              <div className="trainer-overlay"></div>
              <img src={t.img} alt={t.name} />
              <div className="trainer-info">
                <div className="trainer-name">{t.name}</div>
                <div className="trainer-role">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews">
        <h2 className="section-title">What Our Members Say</h2>
        <div className="review-container">
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <p>{r.text}</p>
              <h4>— {r.author}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
