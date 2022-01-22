import React from 'react';
import { deleteCommentRequest } from '../../../../utils/fetchQuestsForums';

const DeleteComment = ({ comment, comments, setComments }) => {

    const deleteConfirmation = () => {
       
        const deleteBoolean = window.confirm("Are you sure you want to delete this comment? It will be removed forever");
        if(deleteBoolean){

            const updatedComments =  comments.filter((singleComment) => {
                if(singleComment.comment_id !== comment.comment_id){
                    return singleComment;
                }
            })
    
            setComments(updatedComments)

            deleteCommentRequest(comment.comment_id)
            .catch(err => console.log(err))
        }
    }

    return (
        <button onClick={() => deleteConfirmation()} className="btn delete">Delete</button>
    )
}

export default DeleteComment;