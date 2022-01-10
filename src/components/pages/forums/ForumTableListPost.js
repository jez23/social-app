import React from 'react';
 
import Grid3070 from '../../grids/Grid3070';
/* import ProfileImage from '../profile/profileImage/ProfileImage'; */

const ForumTableListPost =  ({ post }) => {
    return (
        <>
            <Grid3070
                col1={
                    <>
                       {/*  <ProfileImage /> */}
                        <p>{post.postedBy}</p>
                        <p>{post.datePosted}</p>
                        <p>{post.subscriptionType}</p>
                        <p>Total number of posts </p>
                    </>
                }
                custClassCol2={"commentBoarder"}
                col2={
                    <>
                        <div className="forumComment__header">#342423434</div>
                        <div className="forumComment__body">
                            <p>{post.comment}</p>
                        </div>
                    </>}
            />
        </>

    ) 
}

export default ForumTableListPost;