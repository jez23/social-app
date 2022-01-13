import React from 'react';

const UpVotes = ({ topic }) => {
  return (
    <div className="upVote">
      <div className="upVote__text">
        <p>Votes {topic.votes}</p>
      </div>
      <div className='upVote__buttons'>
        <i className="fa fa-arrow-circle-o-up" aria-hidden="true"></i>
        <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default UpVotes;