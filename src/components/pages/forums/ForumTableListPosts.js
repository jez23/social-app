import React from 'react';

 
const ForumTableListPosts =  ({ url, topic }) => {
 
    console.log(topic)
    return (
     
            <div className="forumTableListPost">
                <div className="forumTableListPost__title">
                    <h3>{topic.title}</h3>
                    <p>Summary</p>
                </div>
                <div className="forumTableListPost__numTopic">
                    <span>ds</span>
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

export default ForumTableListPosts;