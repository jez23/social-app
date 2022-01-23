import React, { useState, useContext, useEffect } from "react";
import { getForumCommentsRequest } from "../../../../utils/fetchQuestsForums";
import Context from '../../../../contexts/Context';

import Comment from "../forumComments/Comment";
import AddNewComment from "./AddNewComment";
import Pagination from '../../../pagination/Pagination';

const ForumComments = ({ topicSlug }) => {

  const {   paginationCurrentPageTopics,
    setPaginationCurrentPageTopics } = useContext(Context); 

  const [comments, setComments] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  
    getForumCommentsRequest(topicSlug, paginationCurrentPageTopics)
      .then((data) => {
        setComments(data.comments);
        setTotalCount(data.total_count)
        console.log(data.comments)
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [paginationCurrentPageTopics]);

  return (
      <div className="center80">
            <AddNewComment
              topicSlug={topicSlug}
              comments={comments}
              setComments={setComments}
            />
            {isLoading ? 
              <p>Loading....</p> : 
              <>
              {comments.map((comment, key) => {
                return (
                 
                  <Comment
                    comment={comment}
                    key={`comment-${key}`}
                    comments={comments}
                    setComments={setComments}
                  />
                );
              })}
              <Pagination totalCount={totalCount} perPage={5}/>
              </>
            }
      </div>
  );
};

export default ForumComments;
