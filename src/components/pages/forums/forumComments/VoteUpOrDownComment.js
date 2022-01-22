import React, { useContext } from 'react';
import Context from "../../../../contexts/Context";
import { voteOnCommentRequest } from '../../../../utils/fetchQuestsForums';

const VoteUpOrDown = ({ comment, comments, setComments  }) => {

    const { formatDates } = useContext(Context);

    const handleVote = (num) => {

       const updatedComments =  comments.map((singleComment) => {
            if(singleComment.comment_id === comment.comment_id){
                singleComment.votes += num;
            }
            return singleComment;
        })

        setComments(updatedComments);

        voteOnCommentRequest(comment.comment_id, num)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    return (
         <div className="commentCard__upvote grid3070">
            <div className="topicCard__upvote grid3070__col1">
              <p>Vote:</p>
              <i className="fa fa-arrow-circle-o-up vote_plus" aria-hidden="true" onClick={() => handleVote(1)}></i>
              <i className="fa fa-arrow-circle-o-down vote_minus" aria-hidden="true" onClick={() => handleVote(-1)}></i>
            </div>
            <div className="grid3070__col2">
              <h4>{comment.author}</h4>
              <p>{formatDates(comment.created_at)}</p>
              <p>Votes: {comment.votes}</p>
            </div>
         </div>
    )
}

export default VoteUpOrDown;