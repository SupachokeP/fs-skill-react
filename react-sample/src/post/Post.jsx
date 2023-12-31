import React, { useState } from "react";
import DataFetcher from "../lib/withRequest"; // Assuming it's in the same directory

const Post = (props) => {
  const [userName, setUserName] = useState("DefaultUser");
  const [data, setData] = useState([]);

  const onChange = (event) => {
    const newName = event.target.value;
    setUserName(newName);
    // Do something with the new name
  };

  const name = props.name;

  return (
    <div>
      <DataFetcher
        url="https://jsonplaceholder.typicode.com/posts"
        setData={setData}
      />
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
          {data.map((post) => (
            <tr key={post.id}>
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
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
