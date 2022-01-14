import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom'; 
import { useParams } from "react-router-dom";
import Context from "../../../../contexts/Context";


import PageTitleBar from "../../../pageTitleBar/PageTitlebar";
import Grid108010 from "../../../grids/Grid108010";
import Grid5050 from "../../../grids/Grid5050";
import ForumComments from "../forumComments/ForumComments";
import UpVotes from "./UpVotes";

const ForumTopics = () => {
  let { topic_slug } = useParams();

  const { baseUrl, formatDates } = useContext(Context);
  const [topic, setTopic] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setIsLoading(true);
    fetch(`${baseUrl}/reviews/${topic_slug}`)
      .then((res) => res.json())
      .then((data) => {
        setTopic(data.review[0]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <Grid108010
        custClassMain={'pad20-m'}
      col2={
        <div className="forumTopic">
            <Grid5050 
            custClassCol2={`alignRightFlex`}
                col1={
                    <PageTitleBar title={topic.title} />
                }
                col2={
                    <UpVotes topic={topic} setTopic={setTopic}/>
                }
            />
          
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
      }
    />
  );
};

export default ForumTopics;
