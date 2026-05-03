import { useState } from 'react'

const members = [
  { name: 'Rahul', plan: 'Premium', date: '12 Mar 2026' },
  { name: 'Amit', plan: 'Standard', date: '10 Mar 2026' },
  { name: 'Sneha', plan: 'Basic', date: '08 Mar 2026' },
]

const navItems = ['Dashboard', 'Members', 'Trainers', 'Plans', 'Payments', 'Attendance']

export default function Admin() {
  const [active, setActive] = useState('Dashboard')

  return (
    <div className="admin-layout">
      <div className="sidebar">
        <h2>ADMIN PANEL</h2>
        {navItems.map(item => (
          <a
            key={item}
            href="#"
            onClick={e => { e.preventDefault(); setActive(item) }}
            style={{ color: active === item ? '#ff1f1f' : '' }}
          >
            {item}
          </a>
        ))}
        <a href="/" style={{ marginTop: '20px', color: '#ff4d4d' }}>← Back to Site</a>
      </div>

      <div className="admin-main">
        <h1>{active}</h1>

        {active === 'Dashboard' && (
          <>
            <div className="cards-admin">
              <div className="card-admin"><h3>TOTAL MEMBERS</h3><p>250</p></div>
              <div className="card-admin"><h3>TOTAL TRAINERS</h3><p>12</p></div>
              <div className="card-admin"><h3>ACTIVE PLANS</h3><p>5</p></div>
              <div className="card-admin"><h3>MONTHLY REVENUE</h3><p>₹1,25,000</p></div>
            </div>

            <h2>Recent Members</h2>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Plan</th>
                  <th>Join Date</th>
                </tr>
              </thead>
              <tbody>
                {members.map((m, i) => (
                  <tr key={i}>
                    <td>{m.name}</td>
                    <td>{m.plan}</td>
                    <td>{m.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {active !== 'Dashboard' && (
          <div style={{ color: '#666', fontFamily: 'Oswald, sans-serif', fontSize: '18px', marginTop: '20px' }}>
            {active} section — connect to your PHP backend API to load data.
          </div>
        )}
      </div>
    </div>
  )
}
