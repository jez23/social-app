import React, { useState, useEffect, useContext } from 'react';
import Context from '../../../../contexts/Context';

const DeleteComment = ({ comment, comments, setComments }) => {

    const { baseUrl } = useContext(Context);

    const deleteConfirmation = () => {
       
        const deleteBoolean = window.confirm("Are you sure you want to delete this comment? It will be removed forever");
        if(deleteBoolean){

            const updatedComments =  comments.filter((singleComment) => {
                if(singleComment.comment_id !== comment.comment_id){
                    return singleComment;
                }
            })
    
            setComments(updatedComments)

            fetch(`${baseUrl}/comments/${comment.comment_id}`,
            {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                }
              })
            .then(res => {
                if(res.status !== 204){
                    console.log(res.status)
                    throw "Something went wrong deleting the comment";
                } else{
                    console.log("Deleted")
                }
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <button onClick={() => deleteConfirmation()} className="btn delete">Delete</button>
    )
}

export default DeleteComment;