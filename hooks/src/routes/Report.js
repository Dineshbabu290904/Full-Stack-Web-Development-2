import React from "react";
import "./Report.css"

function Report() {
  const reports = [
    { id: 1, title: "Monthly Attendance", status: "Completed" },
    { id: 2, title: "Mid-Term Grades", status: "Pending" },
    { id: 3, title: "End-Term Results", status: "In Progress" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Report List</h1>
      <ul>
        {reports.map((report) => (
          <li key={report.id}>
            {report.title} - {report.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Report;
