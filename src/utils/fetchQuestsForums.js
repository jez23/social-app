const baseUrl = `https://blog-blackend-api.herokuapp.com/api/v1`;

export const addNewCatergoryRequest = (title, description, owner) => {
  return fetch(`${baseUrl}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      description: description,
      owner: owner,
    }),
  }).then((res) => {
    if (res.status !== 201) {
      return Promise.reject("Category title already exists");
    } else {
      return res.json();
    }
  });
};

export const deleteCatergoryRequest = (cat_slug) => {
  return fetch(`${baseUrl}/categories/${cat_slug}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status !== 204) {
      return Promise.reject("Something went wrong deleting the category");
    } else {
      console.log("Deleted");
    }
  });
};

export const getAllCategoriesRequest = () => {
  return fetch(`${baseUrl}/categories`).then((res) => res.json());
};

export const addNewCommentRequest = (topicSlug, username, comment) => {
  return fetch(`${baseUrl}/reviews/${topicSlug}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      body: comment,
    }),
  }).then((res) => {
    if (res.status !== 201) {
      return Promise.reject("Error: There was an error with your comment");
    } else {
      return res.json();
    }
  });
};

export const deleteCommentRequest = (comment_id) => {
  return fetch(`${baseUrl}/comments/${comment_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status !== 204) {
      return Promise.reject("Something went wrong deleting the comment");
    } else {
      console.log("Deleted");
    }
  });
};

export const getForumCommentsRequest = (topicSlug) => {
  return fetch(`${baseUrl}/reviews/${topicSlug}/comments`).then((res) =>
    res.json()
  );
};

export const voteOnCommentRequest = (comment_id, num) => {
  return fetch(`${baseUrl}/comments/${comment_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inc_votes: num,
    }),
  }).then((res) => res.json());
};

export const getAllTopicsRequest = (topic_slug) => {
  return fetch(`${baseUrl}/reviews/${topic_slug}`).then((res) => res.json());
};

export const getAllTopicsQueryRequest = (queries, paginationCurrentPageTopics) => {
    
    let url ='';
    if(queries){
      url = `${baseUrl}/reviews${queries}&limit=10&p=0`;
    } else {
      url = `${baseUrl}/reviews?limit=10&p=${paginationCurrentPageTopics * 10}`;
    }
    
    return fetch(url)
      .then((res) => {
        if(res.status !== 200){
          return Promise.reject("No topics exist");
        } else{
          return res.json()
        }
      })
}

export const voteOnTopicRequest = (topic_slug, num) => {
  return fetch(`${baseUrl}/reviews/${topic_slug}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inc_votes: num,
    }),
  }).then((res) => res.json());
};



export const addNewTopicRequest = (topicObj) => {
    
  return fetch(`${baseUrl}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(topicObj),
  }).then((res) => {
    if (res.status !== 201) {
      return Promise.reject("Topic title already exists");
    } else {
      return res.json();
    }
  });
};

export const deleteTopicRequest = (topic_slug) => {
  return fetch(`${baseUrl}/reviews/${topic_slug}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status !== 204) {
      return Promise.reject("Something went wrong deleting the review");
    } else {
      console.log("Deleted");
    }
  });
};


export const getForumByCategoryRequest = (category_slug) => {
    return fetch(`${baseUrl}/reviews?category=${category_slug}`)
    .then((res) => {
      if(res.status !== 200){
        return Promise.reject("No topics exist");
      } else{
        return res.json()
      }
    })
}