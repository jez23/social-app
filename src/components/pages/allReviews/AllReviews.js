import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../../../contexts/Context";

import TopicCard from "../forums/topics/TopicCard";
import AddNewTopic from '../forums/topics/AddNewTopic';
import Filters from './Filters';
import Pagination from '../../pagination/Pagination';

import PageTitleBar from "../../pageTitleBar/PageTitlebar";
import Grid108010 from "../../grids/Grid108010";

const AllReviews = () => {
/*   let { category_slug } = useParams(); */
  const { baseUrl, allCategories, setAllCategories,  topics, setTopics, paginationCurrentPageTopics } = useContext(Context);

 /*  const [topics, setTopics] = useState([]); */
  const [isLoading, setIsLoading] = useState(true);
  const [queries, setQueries] = useState('');
  const [totalCount, setTotalCount] = useState(null);
 /*  const [categories, setCategories] = useState([]); */

  useEffect(() => {
    setIsLoading(true);
    let url ='';
    if(queries){
      url = `${baseUrl}/reviews${queries}&limit=10&p=0`;
    } else {
      url = `${baseUrl}/reviews?limit=10&p=${paginationCurrentPageTopics * 10}`;
    }

    fetch(url)
      .then((res) => {
        console.log("now")
        if(res.status !== 200){
          setIsLoading(false);
          throw "No topics exist";
        } else{
          return res.json()
        }
      })
      .then((data) => {
        setTopics(data.reviews);
        setTotalCount(data.total_count);
        setIsLoading(false);
        return
      })
      .catch((err) => console.log(err));

  }, [queries, paginationCurrentPageTopics]);

  useEffect(() => {
    return  fetch(`${baseUrl}/categories`)
      .then(res => res.json())
      .then(data => setAllCategories(data.categories))
      .catch((err) => console.log(err));
  }, [])
  
   

  

  return (
    <Grid108010
    custClassMain={"pad20-m"}
      col2={
        <>
          <PageTitleBar title="Reviews" />
          <AddNewTopic topics={topics} setTopics={setTopics}/>
          <Filters queries={queries} setQueries={setQueries}/>
          {isLoading ? (
            <p>Loading....</p>
          ) : (
            <>
            <div className="cardLists">
            {topics.length > 0 ? topics.map((topic, key) => {
              return <TopicCard topic={topic} key={`topic-${key}`} topics={topics} setTopics={setTopics}/>;
            }) : topics && <p>There are currently no posts for this topic.</p>}
            </div>
            < Pagination totalCount={totalCount}/>
            </>
          )}    
        </>
      }
    />
  );
};

export default AllReviews;
