import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Context from '../../../../contexts/Context';

import PageTitleBar from '../../../pageTitleBar/PageTitlebar';
import Grid108010 from "../../../grids/Grid108010";



const ForumTopics = ({ topic, match }) => {
  let { category_slug } = useParams(); 
  const { baseUrl } = useContext(Context);

  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${baseUrl}/reviews?category=${category_slug}`)
    .then(res => res.json())
    .then(data => {
      setTopics(data.reviews);
      setIsLoading(false);
    }).catch(err => console.log(err))

}, [])

 /*  const post = forum.find(forum => {
    return forum.slug === slug;
  })
 */

  return (
    <Grid108010 
      col2={ 
        <>
          <PageTitleBar title="Reviews" />


          {isLoading ? <p>Loading....</p> : topics.map((topic, key) => {
              return (
              <div>{topic.title}</div>
              );
            })}  

        </>
      }
    />
  );
};

export default ForumTopics;