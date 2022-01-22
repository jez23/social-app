import React from 'react';
import VoteUpOrDownTopic from './VoteUpOrDownTopic';

const UpVotes = ({ topic, topicSlug, setTopic}) => {
  return (
    <div className="upVote">
      <div className="upVote__text">
        <p>Votes {topic.votes}</p>
      </div>
      <VoteUpOrDownTopic topic={topic} setTopic={setTopic} topicSlug={topicSlug}/>
    </div>
  );
};

export default UpVotes;