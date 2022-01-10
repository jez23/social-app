import React from "react";
import { Link } from 'react-router-dom'; 
import forum from "../../../forum.json"; 

import PageTitleBar from '../../pageTitleBar/PageTitlebar';
import ForumTable from "./ForumTable";
import ForumTableListTopics from "./ForumTableListTopics";
  
import Grid108010 from "../../grids/Grid108010";
  
const Forums = () => {
  return (
    <Grid108010
      col2={
        <>
          <PageTitleBar title="Forums" />

          <ForumTable>
          {forum.map((topic, key) => {
              return (
                <Link to={`/forums/forum/${topic.slug}`}>
                    <ForumTableListTopics topic={topic} />
                </Link>
                
              ) 
            })}
            </ForumTable>
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