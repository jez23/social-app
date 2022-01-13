import React, { useState, useContext, useEffect } from "react";
import Context from "../../../../contexts/Context";

import Grid108010 from "../../../grids/Grid108010";
import Comment from "../forumComments/Comment";
import AddNewComment from  './AddNewComment';

const ForumComments = ({topicSlug}) => {

    const { baseUrl } = useContext(Context);

    const [comments, setComments] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      
        setIsLoading(true);
        fetch(`${baseUrl}/reviews/${topicSlug}/comments`)
          .then((res) => res.json())
          .then((data) => {
              console.log(data.comments)
            setComments(data.comments);
            setIsLoading(false);
          })
          .catch((err) => console.log(err));
      }, []);

  return (
    <>
      <Grid108010
        col2={
        <>
          < AddNewComment topicSlug={topicSlug} comments={comments} setComments={setComments}/>
          {isLoading? <p>Loading....</p> : comments.map((comment, key) => {
              return <Comment comment={comment} key={`comment-${key}`} comments={comments} setComments={setComments}/>
          })}
          </>
        }
      />
    </>
  );
};

export default ForumComments;
