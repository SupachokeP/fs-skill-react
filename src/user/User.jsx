import React, { useState, useEffect } from "react";
import axios from "axios";
import DataFetcher from "../lib/withRequest"; // Assuming it's in the same directory

const User = (props) => {
  const [userName, setUserName] = useState("DefaultUser");
  const [users, setUsers] = useState([]); // Or { data: [] } if needed

  useEffect(() => {
    // Assuming `withRequest` renders DataFetcher correctly
    ReactDOM.render(
      <DataFetcher
        url="https://jsonplaceholder.typicode.com/users"
        setData={setUsers}
      />,
      document.getElementById("data-fetcher-container") // Adjust as needed
    );
  }, [userName]);

  const onChange = (event) => {
    const newName = event.target.value;
    setUserName(newName);
  };
  console.log(users);
  const name = props.name;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {users.data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        User: {userName} Name: {name}
      </p>
      <input type="text" onChange={onChange} />
    </div>
  );
};

export default User;
