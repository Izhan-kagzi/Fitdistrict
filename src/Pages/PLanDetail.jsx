import { useParams, Link } from 'react-router-dom';
import { planData } from '../data/planData';

export default function PlanDetail() {
  const { planId } = useParams(); // gets 'beginner', 'standard', or 'premium' from URL
  const plan = planData[planId];

  if (!plan) return <h2 style={{color: 'white', textAlign: 'center'}}>Plan not found!</h2>;

  return (
    <div className="plan-page">
      <div className="plan-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${plan.image})` }}>
        <h1>{plan.title}</h1>
        <h2 className="plan-price">{plan.price}</h2>
      </div>

      <section className="plan-content">
        <div className="plan-info-card">
          <h3>Description</h3>
          <p>{plan.description}</p>
          
          <h3>What's Included:</h3>
          <ul className="plan-list">
            {plan.details.map((item, i) => (
              <li key={i}>✓ {item}</li>
            ))}
          </ul>
          
          <Link to="/contact" className="btn">START THIS PLAN</Link>
          <Link to="/" className="btn-outline" style={{marginLeft: '10px'}}>BACK TO HOME</Link>
        </div>
      </section>
    </div>
  );
}