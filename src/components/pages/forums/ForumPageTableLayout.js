import React from 'react';

  
const ForumTable = ({ children }) => {
    return (
        <div className="forumTable">
            <div className="forumTable__header">
              {/*   <div className="forumTable__header__title">
                    <h3>Title</h3>
                </div>
                <div className="forumTable__header__topics">
                    <h3>Topics</h3>
                </div>
                <div className="forumTable__header__posts">
                    <h3>Posts</h3>
                </div>
                <div className="forumTable__header__lastPost">
                    <h3>Last Post</h3>
                </div> */}
            </div>
           { children }
        </div>
    ) 
}

export default ForumTable;