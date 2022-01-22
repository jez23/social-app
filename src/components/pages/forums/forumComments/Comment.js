import React, { useContext } from "react";
import { Link } from 'react-router-dom'; 

import Context from "../../../../contexts/Context";

import VoteUpOrDownComment from "./VoteUpOrDownComment";
import DeleteComment from "./DeleteComment";
import Grid7030 from "../../../grids/Grid7030";

const Comment = ({ comment, comments, setComments }) => {
  const { loggedInUser } = useContext(Context);

  return (
    <div className="grid4060">
        <div className="grid4060__col1">
          <VoteUpOrDownComment comment={comment} comments={comments} setComments={setComments}/>
        </div>
        <div className="grid4060__col2">
        <Grid7030
          col1={<p>{comment.body}</p>}
          col2={
            loggedInUser.length > 0 ? loggedInUser[0].username === comment.author ? (
                <DeleteComment comment={comment} comments={comments} setComments={setComments}/>
            ): <Link
            to={`/members-directory/profile/${comment.author}`}
            className="btn primary"
          >Profile</Link> : (
              <Link
                to={`/members-directory/profile/${comment.author}`}
                className="btn primary"
              >Profile</Link>
            )
          }
        />
     </div>
    </div>
  );
};

export default Comment;
