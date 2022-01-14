import React, { useContext, useState } from "react";
import Context from "../../../../contexts/Context";

const AddNewComment = ({ topicSlug, comments, setComments }) => {
  const { baseUrl, loggedInUser } = useContext(Context);

  const [comment, setComment] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${baseUrl}/reviews/${topicSlug}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: loggedInUser[0].username,
        body: comment,
      }),
    })
      .then((res) => {
        if (res.status !== 201) {
          setErrorMsg("Error: There was an error with your comment");
          throw "Error: There was an error with your comment";
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setErrorMsg("");
        setComment("");
        setComments([data.comment, ...comments]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        required
        className="forumTextArea"
        placeholder="Enter comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      {!!errorMsg && <p className="errorMesssage">{errorMsg}</p>}
      <button type="submit" className="btn primary">
        Submit
      </button>
    </form>
  );
};

export default AddNewComment;
