import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../../../../contexts/Context";

import { getForumByCategoryRequest } from '../../../../utils/fetchQuestsForums';

import TopicCard from "./TopicCard";
import AddNewTopic from './AddNewTopic';

import PageTitleBar from "../../../pageTitleBar/PageTitlebar";

const ForumTopics = () => {
  let { category_slug } = useParams();
  const { topics, setTopics } = useContext(Context);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
   
      getForumByCategoryRequest(category_slug)
      .then((data) => {
        setTopics(data.reviews);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="pad20-m center80">
          <PageTitleBar title={`Reviews for ${category_slug}`} />
          <AddNewTopic topics={topics} setTopics={setTopics} category={category_slug}/>
          {isLoading ? (
            <p>Loading....</p>
          ) : (
            <div className="cardLists">
            {topics.length > 0 ? topics.map((topic, key) => {
              return <TopicCard topic={topic} key={`topic-${key}`} topics={topics} setTopics={setTopics}/>;
            }) : topics && <p>There are currently no posts for this topic.</p>}
            </div>
          )}
    </div>
  );
};

export default ForumTopics;
