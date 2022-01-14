import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../../../contexts/Context";

import TopicCard from "../forums/topics/TopicCard";
import AddNewTopic from '../forums/topics/AddNewTopic';
import Filters from './Filters';

import PageTitleBar from "../../pageTitleBar/PageTitlebar";
import Grid108010 from "../../grids/Grid108010";

const AllReviews = () => {
/*   let { category_slug } = useParams(); */
  const { baseUrl, allCategories, setAllCategories } = useContext(Context);

  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [queries, setQueries] = useState('');

 /*  const [categories, setCategories] = useState([]); */

  useEffect(() => {
    setIsLoading(true);
    fetch(`${baseUrl}/reviews${queries}`)
      .then((res) => {
        if(res.status !== 200){
          setIsLoading(false);
          throw "No topics exist";
        } else{
          return res.json()
        }
      })
      .then((data) => {
          console.log(data)
        setTopics(data.reviews);
        setIsLoading(false);
        return
      }).then(() => {
        return  fetch(`${baseUrl}/categories`);
      })
      .then(res => res.json())
      .then(data => {
          
        console.log(data.categories)
            setAllCategories(data.categories);
     /*      setCategories(data.categories); */
        /*   setIsLoading(false); */
      })
      .catch((err) => console.log(err));
  }, [queries]);

  
   

  

  return (
    <Grid108010
      col2={
        <>
          <PageTitleBar title="Reviews" />
          <AddNewTopic topics={topics} setTopics={setTopics}/>
          <Filters queries={queries} setQueries={setQueries}/>
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

export default AllReviews;
