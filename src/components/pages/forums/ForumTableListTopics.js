import React from 'react';

  
const ForumTableListTopics =  ({ topic }) => {
    return (
   
            <div className="forumTableListPost">
                <div className="forumTableListPost__title">
                    <h3>{ topic.title }</h3>
                    <p>{ topic.intro }</p> 
                </div>
                <div className="forumTableListPost__numTopic">
                    <span>{ topic.topics.length}</span>
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