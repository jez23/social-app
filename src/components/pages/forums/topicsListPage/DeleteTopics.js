import React from "react";
import { deleteTopicRequest } from "../../../../utils/fetchQuestsForums";

const DeleteTopics = ({ topic, topics, setTopics }) => {
  const handleDelete = (e) => {
    e.stopPropagation();

    const deleteBoolean = window.confirm(
      "Are you sure you want to delete this review? It will be removed forever"
    );
    if (deleteBoolean) {
      const updatedTopics = topics.filter((singleTopic) => {
        if (singleTopic.slug !== topic.slug) {
          return singleTopic;
        }
      });

      setTopics(updatedTopics);

      deleteTopicRequest(topic.slug).catch((err) => console.log(err));
    }
  };

  return (
    <button className="btn delete" onClick={(e) => handleDelete(e)}>
      Delete
    </button>
  );
};

export default DeleteTopics;
