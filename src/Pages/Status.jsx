import Loader from '../components/Loader'

const attendance = [
  { date: '25 Mar 2026', status: 'Present' },
  { date: '24 Mar 2026', status: 'Present' },
  { date: '23 Mar 2026', status: 'Present' },
  { date: '22 Mar 2026', status: 'Present' },
  { date: '21 Mar 2026', status: 'Absent' },
  { date: '20 Mar 2026', status: 'Present' },
  { date: '19 Mar 2026', status: 'Present' },
  { date: '18 Mar 2026', status: 'Present' },
  { date: '17 Mar 2026', status: 'Absent' },
  { date: '16 Mar 2026', status: 'Present' },
  { date: '15 Mar 2026', status: 'Present' },
]

export default function Status() {
  const presentCount = attendance.filter(a => a.status === 'Present').length
  const percentage = Math.round((presentCount / attendance.length) * 100)

  return (
    <>
      <Loader />
      <div className="status-page">
        <h2>MY STATUS</h2>

        <div className="status-card">
          <h3>USER DETAILS</h3>
          <p><strong>Name:</strong> Izhan Kagzi</p>
          <p><strong>Email:</strong> izhan@gmail.com</p>
        </div>

        <div className="status-card">
          <h3>MEMBERSHIP</h3>
          <p><strong>Plan:</strong> Premium</p>
          <p><strong>Status:</strong> <span className="status-active">Active</span></p>
          <p><strong>Expiry:</strong> 30 Dec 2026</p>
        </div>

        <div className="status-card">
          <h3>TRAINER</h3>
          <p><strong>Name:</strong> John Carter</p>
          <p><strong>Specialization:</strong> Strength Training</p>
        </div>

        <section className="attendance-section">
          <div className="attendance-header">
            <h3>ATTENDANCE RECORD</h3>
            <div className="attendance-summary">
              <span>Attendance: <strong>{percentage}%</strong></span>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${percentage}%` }}></div>
              </div>
            </div>
          </div>

          <div className="attendance-card">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {attendance.map((a, i) => (
                  <tr key={i}>
                    <td>{a.date}</td>
                    <td>
                      <span className={`badge ${a.status === 'Present' ? 'badge-present' : 'badge-absent'}`}>
                        {a.status === 'Present' ? '✔ Present' : '✖ Absent'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  )
}
