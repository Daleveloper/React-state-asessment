import React from 'react';

function NewPosts({postIndex, type, content, handleDelete}){
  if(type === "Text"){
    return(
    <div className="post">
        <p>{content}</p>
        <button name="delete" onClick={()=> handleDelete(postIndex)}>Delete Post</button>
      </div>
    )
  }
   if(type === "Image"){
    return(
    <div className="post">
        <img src={content} alt="post"/>
        <button name="delete" onClick={()=> handleDelete(postIndex)}>Delete Post</button>
      </div>
    )
  }
    return null    
}
export default NewPosts;