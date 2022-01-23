import React, { useState, useEffect, useContext } from "react";
import Context from "../../../contexts/Context";
import { getAllTopicsQueryRequest, getAllCategoriesRequest } from '../../../utils/fetchQuestsForums';

import TopicCard from "../forums/topicsListPage/TopicCard";
import AddNewTopic from '../forums/topicsListPage/AddNewTopic';
import Filters from './Filters';
import Pagination from '../../pagination/Pagination';
import PageTitleBar from "../../pageTitleBar/PageTitlebar";

const AllReviews = () => {

  const { setAllCategories,  topics, setTopics, paginationCurrentPageTopics } = useContext(Context);

  const [isLoading, setIsLoading] = useState(true);
  const [queries, setQueries] = useState('');
  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    getAllTopicsQueryRequest(queries, paginationCurrentPageTopics)
      .then((data) => {
        setTopics(data.reviews);
        setTotalCount(data.total_count);
        setIsLoading(false);
        return
      })
      .catch((err) => console.log(err));

  }, [queries, paginationCurrentPageTopics]);

  useEffect(() => {
      getAllCategoriesRequest()
      .then(data => setAllCategories(data.categories))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="pad20-m center80">
          <PageTitleBar title="All Reviews" />
          <AddNewTopic topics={topics} setTopics={setTopics}/>
          <Filters queries={queries} setQueries={setQueries}/>
          {isLoading ? (
            <p>Loading....</p>
          ) : (
            <>
            <div className="cardLists">
              <p><strong>Showing {topics.length} of {totalCount}</strong></p>
            {topics.length > 0 ? topics.map((topic, key) => {
              return <TopicCard topic={topic} key={`topic-${key}`} topics={topics} setTopics={setTopics}/>;
            }) : topics && <p>There are currently no posts for this topic.</p>}
            </div>
            < Pagination totalCount={totalCount} perPage={10}/>
            </>
          )}    
    </div>
  );
};

export default AllReviews;
