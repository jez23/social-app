const baseUrl = `https://blog-blackend-api.herokuapp.com/api/v1`;


export const getSearchResultsRequest = (searchInput) => {
    return fetch(`${baseUrl}/reviews?title=${searchInput}`)
    .then(res => {
      console.log(res.status)
      return res.json();
    })
  };