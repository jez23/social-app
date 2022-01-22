const baseUrl = `https://blog-blackend-api.herokuapp.com/api/v1`;

export const getAllUsersRequest = () => {
    return fetch(`${baseUrl}/users`)
    .then(response => {
        return response.json()
    })
};

export const getSingleUserRequest = (username) => {
    return  fetch(`${baseUrl}/users/${username}`)
    .then(res => res.json())
}