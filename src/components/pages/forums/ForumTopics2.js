import React from "react";
import { Link } from 'react-router-dom'; 
import { useParams } from "react-router-dom";
 

import ForumTableListPosts from "./ForumTableListPosts";
import PageTitleBar from '../../pageTitleBar/PageTitlebar';
import Grid108010 from "../../grids/Grid108010";
import forum from "../../../forum.json"; 


const ForumTopics = ({ topic, match }) => {
  let { slug } = useParams();

  const post = forum.find(forum => {
    return forum.slug === slug;
  })


  return (
    <Grid108010 
      col2={ 
        <>
          <PageTitleBar title="Topics" />


         {post.topics.map((topic, key) => {
              return (
              <Link to={`/forums/topic/${topic.slug}`}>
                    <ForumTableListPosts topic={topic} />
              </Link>
              );
            })} 


         {/*  <ForumTable>
            {forum[id].topics.map((topic, key) => {
              return (
                <ForumTableListPosts url={`/posts/${key}`} topic={topic} />
              );
            })}
          </ForumTable> */}
        </>
      }
    />
  );
};

export default ForumTopics;