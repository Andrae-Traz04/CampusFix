import { useState } from "react";
import Login from "./components/login";
import Dashboard from "./components/Dashboard";
import Reports from "./components/Reports";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("home");

  // GLOBAL reports (shared to all pages)
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
    </>
  );
}

export default App;