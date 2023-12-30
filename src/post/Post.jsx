import React, { useState, useEffect } from "react";
import axios from "axios";

const Post = (props) => {
  const [userName, setUserName] = useState("DefaultUser");
  const [state, setData] = useState({
    data: [],
  });

  useEffect(() => {
    console.log("Component did mount or update");

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData({ data: response.data });
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // If you need to clean up, return a function from useEffect
    return () => {
      console.log("Component will unmount");
      // Cleanup logic here
    };
  }, [userName]);

  const onChange = (event) => {
    const newName = event.target.value;
    setUserName(newName);
    // Do something with the new name
  };

  const name = props.name;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>UserId</td>
            <td>Id</td>
            <td>Title</td>
            <td>Body</td>
          </tr>
        </thead>
        <tbody>
          {state.data.map((user) => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.body}</td>
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

export default Post;
