import React, { useState, useContext, useEffect } from "react";
import { getForumCommentsRequest } from "../../../../utils/fetchQuestsForums";

import Comment from "../forumComments/Comment";
import AddNewComment from "./AddNewComment";

const ForumComments = ({ topicSlug }) => {
  const [comments, setComments] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getForumCommentsRequest(topicSlug)
      .then((data) => {
        setComments(data.comments);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
      <div className="center80">
            <AddNewComment
              topicSlug={topicSlug}
              comments={comments}
              setComments={setComments}
            />
            {isLoading ? (
              <p>Loading....</p>
            ) : (
              comments.map((comment, key) => {
                return (
                  <Comment
                    comment={comment}
                    key={`comment-${key}`}
                    comments={comments}
                    setComments={setComments}
                  />
                );
              })
            )}
      </div>
  );
};

export default ForumComments;
