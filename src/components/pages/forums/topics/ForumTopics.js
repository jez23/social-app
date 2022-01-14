import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../../../../contexts/Context";

import TopicCard from "./TopicCard";
import AddNewTopic from './AddNewTopic';

import PageTitleBar from "../../../pageTitleBar/PageTitlebar";
import Grid108010 from "../../../grids/Grid108010";

const ForumTopics = () => {
  let { category_slug } = useParams();
  const { baseUrl } = useContext(Context);

  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${baseUrl}/reviews?category=${category_slug}`)
      .then((res) => {
        if(res.status !== 200){
          setIsLoading(false);
          throw "No topics exist";
        } else{
          return res.json()
        }
      })
      .then((data) => {
        setTopics(data.reviews);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  /*  const post = forum.find(forum => {
    return forum.slug === slug;
  })
 */

  return (
    <Grid108010
      col2={
        <>
          <PageTitleBar title="Reviews" />
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
        </>
      }
    />
  );
};

export default ForumTopics;
