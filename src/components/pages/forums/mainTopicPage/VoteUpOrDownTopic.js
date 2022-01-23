import React from 'react';
import { voteOnTopicRequest } from '../../../../utils/fetchQuestsForums';

const VoteUpOrDownTopic = ({ topic, setTopic}) => {

    const handleVote = (num, e) => {
        e.stopPropagation();

        const newObj = { ...topic};
        newObj.votes =  newObj.votes + num;
        setTopic(newObj); 

        voteOnTopicRequest(topic.slug, num)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    return (
        <div className='upVote__buttons'>
        <i className="fa fa-arrow-circle-o-up vote_plus" aria-hidden="true" onClick={(e) => handleVote(1, e)}></i>
        <p>{topic.votes}</p>
        <i className="fa fa-arrow-circle-o-down vote_minus" aria-hidden="true" onClick={(e) => handleVote(-1, e)}></i>
      </div>
    )
}

export default VoteUpOrDownTopic;