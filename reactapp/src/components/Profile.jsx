function Profile({ user, reports }) {
  const myReports = reports.filter(
    (r) => r.student === user.name
  );

  return (
    <div style={{ padding: "30px" }}>
      <h2>Profile</h2>

      <h3>{user.name}</h3>
      <p>Total Reports: {myReports.length}</p>

      {myReports.map((report) => (
        <div
          key={report.id}
          style={{
            background: "white",
            padding: "15px",
            marginTop: "10px",
            borderRadius: "8px"
          }}
        >
          <p>{report.issue}</p>
          <span>Status: {report.status}</span>
        </div>
      ))}
    </div>
  );
}

export default Profile;