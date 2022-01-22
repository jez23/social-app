import React, { useContext, useState } from "react";
import Context from "../../../../contexts/Context";
import { addNewCommentRequest } from '../../../../utils/fetchQuestsForums';

const AddNewComment = ({ topicSlug, comments, setComments }) => {
  const { loggedInUser } = useContext(Context);

  const [comment, setComment] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

      addNewCommentRequest(topicSlug, loggedInUser[0].username, comment)
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
