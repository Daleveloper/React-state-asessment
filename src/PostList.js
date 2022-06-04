import React from "react";
import NewPosts from './NewPosts';
/**
 * Diplays a list of either text or image posts.
 *
 */
function PostList({posts, handleDelete}) {
  let postList = posts.map((post, i) => {
    return (
      <NewPosts key={i} postIndex={i} content={post.content} type={post.type} handleDelete={handleDelete}/>
    );
  });
  // TODO: Diplay the list of posts.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each post must have className="post" for the tests to work.
  // TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return <div className="post-list">{postList}</div>;
}

export default PostList;
