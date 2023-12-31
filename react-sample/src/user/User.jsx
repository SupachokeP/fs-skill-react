import React, { useState } from "react";
import DataFetcher from "../lib/withRequest"; // Assuming it's in the same directory

const User = (props) => {
  const [userName, setUserName] = useState("DefaultUser");
  const [users, setUsers] = useState([]); // Or { data: [] } if needed

  const onChange = (event) => {
    const newName = event.target.value;
    setUserName(newName);
  };

  return (
    <div>
      <DataFetcher
        url="https://jsonplaceholder.typicode.com/users"
        setData={setUsers}
      />

      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        User: {userName} Name: {props.name}
      </p>
      <input type="text" onChange={onChange} />
    </div>
  );
};

export default User;
