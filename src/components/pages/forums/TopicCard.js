import React from "react";
import { Link } from "react-router-dom";

const ForumTableListTopics = ({ topic }) => {
  return (
    <Link to={`${topic.slug}`}>
      <div className="topicCard">
        <div className="topicCard__upvote">
            <i className="fa fa-arrow-circle-o-up" aria-hidden="true"></i>
            <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
        </div>
        <div className="topicCard__image">
          <img src={topic.review_img_url} />
        </div>
        <div className="topicCard__meta">
          <h3>{topic.title}</h3>
          <p>{topic.review_body.split(" ").splice(1, 20).join(" ") + "..."}</p>
        </div>
        <div className="topicCard__votes">
          <p>Votes: {topic.votes}</p>
        </div>
      </div>
    </Link>
  );
};

export default ForumTableListTopics;
