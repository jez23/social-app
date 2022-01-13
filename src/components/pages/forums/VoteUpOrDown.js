import React, { useContext } from 'react';
import Context from "../../../contexts/Context";

import Grid3070 from '../../grids/Grid3070';

const VoteUpOrDown = ({ comment, comments, setComments  }) => {

    const { formatDates, baseUrl } = useContext(Context);

    const handleVote = (num) => {

       const updatedComments =  comments.map((singleComment) => {
            if(singleComment.comment_id === comment.comment_id){
                singleComment.votes += num;
            }
            return singleComment;
        })

        setComments(updatedComments)
     /*    console.log("GRRRRRR", comment.comment_id); */

        fetch(`${baseUrl}/comments/${comment.comment_id}`,{
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                inc_votes: num 
            })
          })
        .then((res) =>  res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    return (
         <Grid3070
          custClassCol1={"commentCard__upvote"}
          col1={
            <div className="topicCard__upvote">
              <i className="fa fa-arrow-circle-o-up vote_plus" aria-hidden="true" onClick={() => handleVote(1)}></i>
              <i className="fa fa-arrow-circle-o-down vote_minus" aria-hidden="true" onClick={() => handleVote(-1)}></i>
            </div>
          }
          col2={
            <>
              <h4>{comment.author}</h4>
              <p>{formatDates(comment.created_at)}</p>
              <p>Votes: {comment.votes}</p>
            </>
          }
        />
    )
}

export default VoteUpOrDown;