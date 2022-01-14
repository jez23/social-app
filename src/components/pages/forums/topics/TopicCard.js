import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from '../../../../contexts/Context';

import VoteUpOrDownTopics from "./VoteUpOrDownTopics";
import DeleteTopics from "./DeleteTopics";

const ForumTableListTopics = ({ topic, topics, setTopics }) => {

  const { loggedInUser } = useContext(Context);

  let navigate = useNavigate();

    const handleLink = (e) => {
        e.stopPropagation();
        navigate(`/forums/category/${topic.category}/${topic.slug}`);
    }
  return (
    <div onClick={handleLink}>
      <div className="topicCard">
          < VoteUpOrDownTopics topic={topic} topics={topics} setTopics={setTopics}/>
        <div className="topicCard__image">
          <img src={topic.review_img_url} />
        </div>
        <div className="topicCard__meta">
          <h3>{topic.title}</h3>
          <p>{topic.review_body.split(" ").splice(1, 20).join(" ") + "..."}</p>
        </div>
        <div className="topicCard__votes">
          <p>Votes: {topic.votes}</p>
          <p>Comments: {topic.comment_count}</p>
          {topic.owner === loggedInUser.username? <DeleteTopics topic={topic} topics={topics} setTopics={setTopics}/>: null}
        </div>
      </div>
    </div>
  );
};

export default ForumTableListTopics;
