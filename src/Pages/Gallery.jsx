import { useState } from 'react'
import Loader from '../components/Loader'

const items = [
  { img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=700', cat: 'equipment', label: 'Weight Rack Area' },
  { img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=700', cat: 'classes', label: 'Strength Training Class' },
  { img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=700', cat: 'events', label: 'Fitness Championship 2025' },
  { img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=700', cat: 'equipment', label: 'Cardio Zone' },
  { img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=700', cat: 'classes', label: 'Cardio Burn Session' },
  { img: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=700', cat: 'events', label: 'Annual Members Meet' },
  { img: 'https://images.unsplash.com/photo-1674834727206-4bc272bfd8da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJvZHlidWlsZGluZyUyMGVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D', cat: 'equipment', label: 'Cable Machine Station' },
  { img: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=700', cat: 'classes', label: 'Yoga Morning Class' },
  { img: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fEJvZHlidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D', cat: 'events', label: 'Bodybuilding Showcase' },
  { img: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=700', cat: 'equipment', label: 'Free Weights Section' },
  { img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=700', cat: 'classes', label: 'Personal Training Session' },
  { img: 'https://images.unsplash.com/photo-1596357395217-80de13130e92?q=80&w=700', cat: 'events', label: 'Nutrition Workshop' },
  { img: 'https://images.unsplash.com/photo-1641337221253-fdc7237f6b61?q=80&w=700', cat: 'equipment', label: 'Gym Floor' },
  { img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80', cat: 'classes', label: 'Boxing Class' },
  { img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80', cat: 'classes', label: 'Body Building' },
  { img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80', cat: 'equipment', label: 'Training Area' },
]

const filters = ['all', 'equipment', 'classes', 'events']

export default function Gallery() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? items : items.filter(i => i.cat === active)

  return (
    <>
      <Loader />
      <div style={{ background: '#111', minHeight: '100vh' }}>
        <section className="g-hero">
          <div className="section-sub">EXPLORE OUR WORLD</div>
          <div className="g-title">OUR GALLERY</div>
          <div className="filters">
            {filters.map(f => (
              <button
                key={f}
                className={`filter-btn${active === f ? ' active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </section>

        <div className="gallery-grid">
          {filtered.map((item, i) => (
            <div className="g-item" key={i}>
              <img src={item.img} alt={item.label} />
              <div className="g-cat">{item.cat}</div>
              <div className="g-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
