import { useState } from "react";

function Dashboard({ user, setUser, reports, setReports, setPage }) {
  const [newReport, setNewReport] = useState("");
  const [commentInputs, setCommentInputs] = useState({});

  // ADD REPORT
  const handleAddReport = (e) => {
    e.preventDefault();

    if (!newReport.trim()) return;

    const report = {
      id: Date.now(),
      student: user.name,
      issue: newReport,
      upvotes: 0,
      comments: [],   
      status: "Ongoing"
    };

    setReports([report, ...reports]);
    setNewReport("");
  };

  

  // UPVOTE
  const handleUpvote = (id) => {
    const updated = reports.map((report) =>
      report.id === id
        ? { ...report, upvotes: report.upvotes + 1 }
        : report
    );
    setReports(updated);
  };

  const handleCommentChange = (id, value) => {
    setCommentInputs({
      ...commentInputs,
      [id]: value
    });
  };

  // ADD COMMENT
  const handleAddComment = (id) => {
    if (!commentInputs[id]) return;

    const updated = reports.map((report) => {
      if (report.id === id) {
        return {
          ...report,
          comments: [...report.comments, commentInputs[id]]
        };
      }
      return report;
    });

    setReports(updated);

    setCommentInputs({
      ...commentInputs,
      [id]: ""
    });
  };

  return (
    <main className="dashboard">
      
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>CampusFix!</h2>

        <nav>
          <ul>
            <li onClick={() => setPage("home")}>Home</li>
            <li onClick={() => setPage("reports")}>Reports</li>
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
          <h3>Welcome!</h3>
          <span>👤 {user.name}</span>
        </header>

        <form className="report-form" onSubmit={handleAddReport}>
          <input
            type="text"
            placeholder="Report an issue (noisy aircon, broken chairs...)"
            value={newReport}
            onChange={(e) => setNewReport(e.target.value)}
          />
          <button type="submit">Post</button>
        </form>

        {/* FEED */}
        <section>
          <h4>Report Feed</h4>

          <div className="report-feed">
            {reports.map((report) => (
              <div key={report.id} className="feed-card">

                <h5>{report.student}</h5>
                <p>{report.issue}</p>

                <div className="feed-actions">
                  <button onClick={() => handleUpvote(report.id)}>
                    ⬆ {report.upvotes}
                  </button>

                  <span>💬 {report.comments.length}</span>
                </div>

                {/* COMMENT INPUT */}
                <div className="comment-box">
                  <input
                    type="text"
                    placeholder="Write comment..."
                    value={commentInputs[report.id] || ""}
                    onChange={(e) =>
                      handleCommentChange(report.id, e.target.value)
                    }
                  />

                  <button onClick={() => handleAddComment(report.id)}>
                    Comment
                  </button>
                </div>

                {/* COMMENT LIST */}
                {report.comments.map((c, index) => (
                  <p key={index} className="comment-text">
                    {c}
                  </p>
                ))}

              </div>
            ))}
          </div>
        </section>

      </section>
    </main>
  );
}

export default Dashboard;