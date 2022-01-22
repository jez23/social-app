import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import Context from '../../../../contexts/Context';

import DeleteCategory from './DeleteCategory';
  
const ForumCard =  ({ category, categories, setCategories }) => {

    const { loggedInUser } = useContext(Context);
    let navigate = useNavigate();

    const handleClick = (e) => {
        e.stopPropagation();
        navigate(`/forums/category/${category.slug}`);
    }
    return (
      
            <div className="forumTableListPost" onClick={handleClick}>
                <div className="forumTableListPost__title">
                    <h3>{ category.title }</h3>
                    <p>{ category.description }</p> 
                </div>
                <div className="forumTableListPost__numTopic">
                  {/*   <span>0</span> */}
                </div>
                <div className="forumTableListPost__numPosts">
                  {/*   <span>0</span> */}
                </div>
                <div className="forumTableListPost__lastPosts">
                    {/* <span>0</span> */}
                    {loggedInUser.length > 0 ? category.owner === loggedInUser[0].username? < DeleteCategory category={category} categories={categories} setCategories={setCategories}/> : <p>Created by: {category.owner}</p>: <p>Created by: {category.owner}</p> }
                </div>
            </div>
   
    )
} 

export default ForumCard;