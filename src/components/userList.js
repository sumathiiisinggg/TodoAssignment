import React, { useState, useEffect } from 'react';
import './userList.css'; 

const UserList = () => {
  
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      const usersDetails = [
        { id: 1, name: 'Sumathi', email: 'sumathi@gmail.com' },
        { id: 2, name: 'Krishna', email: 'krishna@gmail.com' },
        { id: 3, name: 'KaniYughan', email: 'kani@gmail.com' },
        { id: 4, name: 'Jay' , email: 'jay@gmail.com'},
        { id: 5, name: 'Shanthi' , email:'sha12@gmail.com'}
      ];
      setUsers(usersDetails);
      setIsLoading(false);
      console.log('UserList component mounted');
    }, 5000); 
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <h1>User List is Loading...</h1>
      ) : (

        <div>
      <h1>User Details</h1>
      <table className='tbl-content'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className='tbl-content'>
          {users.map(user=> (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>

              )}
    </div>
  );
};

export default UserList;
