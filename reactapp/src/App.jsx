import { useState } from "react";
import Profile from "./components/Profile";
import Login from "./components/login";
import Dashboard from "./components/Dashboard";
import Reports from "./components/Reports";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("home");


  const [reports, setReports] = useState([]);

  
  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <>
      {page === "home" && (
        <Dashboard
          user={user}
          setUser={setUser}
          reports={reports}
          setReports={setReports}
          setPage={setPage}
        />
      )}

      {page === "reports" && (
        <Reports
          user={user}
          setUser={setUser}
          reports={reports}
          setPage={setPage}
        />
      )}
      {page === "profile" && (
  <>
    <h3>Profile</h3>

    <div className="profile-container">
      
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-icon">👤</div>
        <h2>{user.name}</h2>
      </div>

      {/* Profile Details */}
      <div className="profile-details">
        <p><strong>Age:</strong> 19</p>
        <p><strong>Course:</strong> BSIT</p>
        <p><strong>Account Created:</strong> 2026</p>
      </div>

    </div>
  </>
)}
    </>
  );
}

export default App;