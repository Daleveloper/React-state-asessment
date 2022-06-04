import React, { useState } from "react";

/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */
function PostCreate({handleNewPosts}) {
  const [type, setType] = useState("Text");
  const [content, setContent] =useState('')
  const [image, setImage] = useState('')
  // TODO: When the form is submitted, a new post should be created, and the form contents cleared.

  function handleSetChange(e){
    setType(e.target.value)
  }
  
  function handleSetContent(e){
    setContent(e.target.value)
  }
  
  function handleSubmit(e){
    e.preventDefault();
    const newPost ={type:type, content:content};
    handleNewPosts(newPost);
  }
  
  
  // For the tests to pass, the form below must have:
  // - a `name="create"` attribute
  // - one child `<button>` with a `type="submit"` attribute
  // - one child `<select>` with a `name="type"` attribute
  // - one child `<textarea>` or `<input>` (not both at the same time) with a `name="content"`

  return (
    <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select value={type} id="type" name="type"  required={true} onChange={handleSetChange}>
            <option value='Text'>Text</option>
            <option value="Image">Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {type === "Text" ? (
            <textarea id="content" name="content" required={true} rows={3} onChange={handleSetContent}/>
          ) : (
            <input id="content" name="content" type="url" required={true} onChange={handleSetContent}/>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;
