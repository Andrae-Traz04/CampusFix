function Reports({ user, setUser, reports, setPage }) {
  return (
    <main className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>CampusFix!</h2>

        <nav>
          <ul>
            <li onClick={() => setPage("home")}>Home</li>
            <li className="active">Reports</li>
            <li>Profile</li>
          </ul>
        </nav>

        <button className="logout-btn" onClick={() => setUser(null)}>
          Logout
        </button>
      </aside>

      {/* Main */}
      <section className="main-content">
        <header className="top-header">
          <h2>Reports</h2>
          <span>👤 {user.name}</span>
        </header>

        <div className="report-feed">
          {reports.length === 0 && <p>No reports yet.</p>}

          {reports.map((report) => (
            <div key={report.id} className="feed-card">
              <h4>You</h4>
              <p>{report.issue}</p>

              <div style={{ marginTop: "10px" }}>
                <b>Status:</b> {report.status}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Reports;