import React, { useContext } from 'react';
import Context from '../../../../contexts/Context';


const DeleteTopics = ({topic, topics, setTopics}) => {

    const { baseUrl } = useContext(Context);
    
    const handleDelete = (e) => {
        e.stopPropagation();
       
        const deleteBoolean = window.confirm("Are you sure you want to delete this review? It will be removed forever");
        if (deleteBoolean) {
          const updatedTopics = topics.filter((singleTopic) => {
            if (singleTopic.slug !== topic.slug) {
              return singleTopic;
            }
          });
    
          setTopics(updatedTopics);
        
    
    
          fetch(`${baseUrl}/reviews/${topic.slug}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              if (res.status !== 204) {
                console.log(res.status);
                throw "Something went wrong deleting the review";
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