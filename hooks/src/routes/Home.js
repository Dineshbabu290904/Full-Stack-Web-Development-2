import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import the CSS file for styling

function Home() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Student Portal</h1>
        <p>Navigate to view Student or Report details.</p>
      </header>
      <main className="home-main">
        <div className="home-card">
          <h2>Students</h2>
          <p>Click below to view student details.</p>
          <button onClick={() => handleNavigation("/student")}>
            View Students
          </button>
        </div>
        <div className="home-card">
          <h2>Reports</h2>
          <p>Click below to view reports.</p>
          <button onClick={() => handleNavigation("/report")}>
            View Reports
          </button>
        </div>
      </main>
    </div>
  );
}

export default Home;
