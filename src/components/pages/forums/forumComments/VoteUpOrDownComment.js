import React, { useContext, useState } from 'react';
import Context from "../../../../contexts/Context";
import { voteOnCommentRequest } from '../../../../utils/fetchQuestsForums';

const VoteUpOrDown = ({ comment, comments, setComments  }) => {

    const { formatDates, loggedInUser } = useContext(Context);
    const [justVoted, setJustVoted] = useState(false);

    const handleVote = (num) => {
      
      setJustVoted(true);

       const updatedComments =  comments.map((singleComment) => {
            if(singleComment.comment_id === comment.comment_id){
                singleComment.votes += num;
            }
            return singleComment;
        })

        setComments(updatedComments);

        voteOnCommentRequest(comment.comment_id, num, loggedInUser[0].username)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }


      return (
        <div className="commentCard__upvote grid3070">
           <div className="topicCard__upvote grid3070__col1">
             <p>Vote:</p>
             {comment.votes_by.includes(loggedInUser[0].username)?   <><i className="fa fa-arrow-circle-o-up vote_plus_disable" aria-hidden="true" onClick={() => alert("You have already voted on this comment")}></i><p>{comment.votes}</p>
              <i className="fa fa-arrow-circle-o-down vote_minus_disable" aria-hidden="true" onClick={() => alert("You have already voted on this comment")}></i></>:
             <>
              {!justVoted && <><i className="fa fa-arrow-circle-o-up vote_plus" aria-hidden="true" onClick={() => handleVote(1)}><p>{comment.votes}</p></i>
              <i className="fa fa-arrow-circle-o-down vote_minus" aria-hidden="true" onClick={() => handleVote(-1)}></i></>}
              {justVoted && <><p>Thank you for your vote</p></>}
             </>}
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