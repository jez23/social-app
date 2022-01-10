import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import PageTitleBar from '../../pageTitleBar/PageTitlebar';
import forum from '../../../forum.json';
import ForumTableListPost from './ForumTableListPost';

import Grid108010 from '../../grids/Grid108010';
import Grid3070 from '../../grids/Grid3070';
import UnauthorisedCompnent from '../unauthorised/UnauthorisedCompnent'; 
import Context from '../../../contexts/Context';

const ForumPosts = ({ history }) => {

    const {cookies} = useContext(Context);
    
    let { slug } = useParams();
    let posted = {}
    forum.forEach(forumtest => {
        for(let j = 0; j < forumtest.topics.length; j++){
            if(forumtest.topics[j].slug === slug){
                posted = forumtest.topics[j]                  
            }
        }
    }) 

    const [forumEnterComment, setForumEnterComment] = useState('')
  
    const submitForumComment = (e) => {
        e.preventDefault();
        console.log(forumEnterComment);
        setForumEnterComment('')
    }



    return (
        <Grid108010
            col2={
                <>
                    <PageTitleBar title="Posts"/>
                    {posted.posts.map((post, key) => {
                        return <ForumTableListPost post={post}/>
                    })}
                       {cookies.token ? <Grid3070 
                            col2={
                                 <form onSubmit={(e) => submitForumComment(e)}>
                                    <textarea className="forumTextArea" placeholder="Enter comment" value={forumEnterComment} onChange={(e) => setForumEnterComment(e.target.value)}></textarea>
                                    <button type="submit" className="btn primary">Submit</button>
                                    </form>
                                }/> : 
                                <Grid3070 
                                    col2={<UnauthorisedCompnent/>}
                                />
                        }  
                </>
            }
        />
    ) 
}

export default ForumPosts;