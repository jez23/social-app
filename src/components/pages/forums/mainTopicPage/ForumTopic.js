import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom'; 
import { useParams } from "react-router-dom";
import Context from "../../../../contexts/Context";
import { getAllTopicsRequest } from '../../../../utils/fetchQuestsForums';

import PageTitleBar from "../../../pageTitleBar/PageTitlebar";
import ForumComments from "../forumComments/ForumComments";
import UpVotes from "./UpVotes";

const ForumTopics = () => {
  let { topic_slug } = useParams(); 

  const { formatDates } = useContext(Context);
  const [topic, setTopic] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setIsLoading(true);

      getAllTopicsRequest(topic_slug)
      .then((data) => {
        setTopic(data.review[0]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="pad20-m center80">
        <div className="forumTopic">
            <div className={`alignRightFlex grid5050`}>
                <div className="grid5050__col1">
                    <PageTitleBar title={topic.title} />
                </div>
                <div className="grid5050__col2">
                    <UpVotes topic={topic} setTopic={setTopic}/>
                </div>
            </div>
          
           {isLoading ? (
            <p>Loading....</p>
          ) : 
          <>
          <div className="forumTopic__body">
            <div className="forumTopic__body__meta">
                <p className="forumTopic__body__meta__category">category: <Link to={`/forums/category/${topic.category}`}><span> {topic.category}</span></Link></p>
                <p>Date posted: {formatDates(topic.created_at)}</p>
            </div>
            <p>{topic.review_body}</p>
            <img src={topic.review_img_url} />
          </div>
            <ForumComments topicSlug={topic_slug}/>
          </>
          } 
        </div>
    </div>
  );
};

export default ForumTopics;
