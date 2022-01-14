import React, { useContext } from 'react';
import Context from '../../../../contexts/Context';


const DeleteTopics = ({category, categories, setCategories}) => {

    const { baseUrl } = useContext(Context);
    
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
        
    
    
          fetch(`${baseUrl}/categories/${category.slug}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              if (res.status !== 204) {
                console.log(res.status);
                throw "Something went wrong deleting the category";
              } else {
                console.log("Deleted");
              }
            })
            .catch((err) => console.log(err));
        }
    }
 
    

    return(
        <button className="btn delete" onClick={(e) => handleDelete(e)}>Delete</button>
    )
}

export default DeleteTopics;