import React, { useContext } from 'react';
import Context from "../../../../contexts/Context";
 
const VoteUpOrDownTopic = ({ topic, setTopics, topics}) => {

    const { baseUrl } = useContext(Context);

    const handleVote = (num, e) => {
        e.stopPropagation();


        const updateTopics = topics.map(topicMap => {
            if(topicMap.slug === topic.slug){
                topicMap.votes += num;
            }
            return topicMap;
        })
        setTopics(updateTopics); 

        fetch(`${baseUrl}/reviews/${topic.slug}`,{
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                inc_votes: num 
            })
          })
        .then((res) =>  res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    return (
        <div className='upVote__buttons'>
        <p>Cast Vote:</p>
        <i className="fa fa-arrow-circle-o-up vote_plus" aria-hidden="true" onClick={(e) => handleVote(1, e)}></i>
        <i className="fa fa-arrow-circle-o-down vote_minus" aria-hidden="true" onClick={(e) => handleVote(-1, e)}></i>
      </div>
    )
}

export default VoteUpOrDownTopic;