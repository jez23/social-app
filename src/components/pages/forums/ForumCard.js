import React from 'react';

  
const ForumTableListTopics =  ({ category }) => {
    return (
   
            <div className="forumTableListPost">
                <div className="forumTableListPost__title">
                    <h3>{ category.title }</h3>
                    <p>{ category.description }</p> 
                </div>
                <div className="forumTableListPost__numTopic">
                    <span>0</span>
                </div>
                <div className="forumTableListPost__numPosts">
                    <span>0</span>
                </div>
                <div className="forumTableListPost__lastPosts">
                    <span>0</span>
                </div>
            </div>
   
    )
} 

export default ForumTableListTopics;