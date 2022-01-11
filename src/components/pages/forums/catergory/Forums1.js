import React, { useEffect, useContext, useState } from "react";
import { Link } from 'react-router-dom'; 
import Context from '../../../../contexts/Context';

import PageTitleBar from '../../../pageTitleBar/PageTitlebar';
import ForumPageTableLayout from "../ForumPageTableLayout";
import ForumCard from "../ForumCard";
  
import Grid108010 from "../../../grids/Grid108010";
  
const Forums = () => {

    const { baseUrl } = useContext(Context);

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
        fetch(`${baseUrl}/categories`)
        .then(res => res.json())
        .then(data => {
            setCategories(data.categories);
            setIsLoading(false);
        }).catch(err => console.log(err))

    }, [])

  return (
    <Grid108010
      col2={
        <>
          <PageTitleBar title="Forums" />

          <ForumPageTableLayout>
          {isLoading? <p>Loading....</p> : categories.map((category, key) => {
              return (
                <Link to={`/forums/category/${category.slug}`} key={`${category}-${key}`}>
                    <ForumCard category={category} />
                </Link>
                
              ) 
            })}
            </ForumPageTableLayout>
         {/*  <Link to={`/topics/${key}`}></Link> */}

          {/* <ForumTable>
            {forum.map((topic, key) => {
              return (
                <ForumTableListTopics url={`/topics/${key}`} topic={topic} />
              ); 
            })}
          </ForumTable> */}
        </>
      }
    />
  );
};

export default Forums;