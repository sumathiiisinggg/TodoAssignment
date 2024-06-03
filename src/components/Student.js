import React from 'react';

const studentList = [
  { id:1, name: 'Krishna', isPresent:true},
  { id:2, name: 'Ram', isPresent:false},
  { id:3, name: 'Kani', isPresent:true},
  { id:4, name: 'Jai', isPresent:true},
  { id:5, name: 'Surya', isPresent:true}
]

function StuAttendance() {

  return (
    <div>
      <h1>Student Attendance</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map(student=> (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.isPresent? 'Present': 'Absent'}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  );
}

/*        <ul>
          {users.map(user => (
            <li key={user.id}>
              <div className="user">
                <span className="user-name">{user.name}</span>
                <span className="user-email">{user.email}</span>
              </div>
            </li>
          ))}
        </ul> */
export default StuAttendance;

