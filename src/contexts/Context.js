import React, { useState, createContext } from 'react';


const Context = createContext();

export function ConstProvider({children}){
  
    const [baseUrl, setBaseUrl] = useState('https://blog-blackend-api.herokuapp.com/api/v1');  
    const [currentTopic, setCurrentTopic] = useState([]);

    const [loggedInUser, setLoggedInUser] = useState({
        avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
        name: "Jess Jelly",
        username: "jessjelly"
    })
    const formatDates = (date) => {
        const newDate = new Date(date).toLocaleDateString("en-US")
        return `${newDate}`;
    }

    return(
        <Context.Provider value={{
            baseUrl,
            currentTopic, 
            setCurrentTopic,
            formatDates,
            loggedInUser,
            setLoggedInUser
             }}>
        {children}
        </Context.Provider>
      )
}


export default Context;