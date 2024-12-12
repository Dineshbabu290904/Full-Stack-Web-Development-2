import React from "react";
import "./Student.css"
function Student() {
  const students = [
    { id: 1, name: "Alice", age: 20 },
    { id: 2, name: "Bob", age: 22 },
    { id: 3, name: "Charlie", age: 21 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} (Age: {student.age})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Student;
