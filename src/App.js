import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([]);

  function addNewPosts(newPosts) {
  setPosts([...posts, newPosts]);
};
  function handleDelete(deleteIndex) {
    setPosts((currentPosts) => currentPosts.filter((ignored, index) => index !== deleteIndex));
  };
  // TODO: Add the ability for the <PostCreate /> component to create new posts.
  // TODO: Add the ability for the <PostList /> component to delete an existing post.
console.log(posts)
  return (
    <div className="App">
    <PostCreate posts={posts} handleNewPosts={addNewPosts}/>
      <PostList posts={posts} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
