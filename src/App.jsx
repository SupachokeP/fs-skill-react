import React, { useState } from "react";
import "./App.css";
import User from "./user/User";
import Post from "./post/Post";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [state, setState] = useState({
    name: "future-skill",
  });

  // Access the state
  const { name } = state;
  const onNamechange = (newName) => {
    setState({ name: newName });
  };

  return (
    <div>
      <div>Hello {name}</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
      </div>
      <p className="read-the-docs">{/* Content for the paragraph */}</p>
      <Routes>
        <Route path="/users" element={<User />} />
        <Route path="/posts" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
