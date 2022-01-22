import React from 'react';
import { deleteCatergoryRequest } from '../../../../utils/fetchQuestsForums';

const DeleteTopics = ({category, categories, setCategories}) => {
    
    const handleDelete = (e) => {
        e.stopPropagation();
       
        const deleteBoolean = window.confirm("Are you sure you want to delete this category? It will be removed forever");
        if (deleteBoolean) {
          const updatedCategories = categories.filter((singleCategory) => {
            if (singleCategory.slug !== category.slug) {
              return singleCategory;
            }
          });
            setCategories(updatedCategories);

            deleteCatergoryRequest(category.slug)
            .catch((err) => console.log(err));
        }
    }

    return(
        <button className="btn delete" onClick={(e) => handleDelete(e)}>Delete</button>
    )
}

export default DeleteTopics;