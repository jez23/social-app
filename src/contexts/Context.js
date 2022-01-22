import React, { useState, createContext } from 'react';
import { useParams } from 'react-router-dom';


const Context = createContext();

export function ConstProvider({children}){
  
    const [currentTopic, setCurrentTopic] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [showSearchPopUp, setShowSearchPopUp] = useState(false);
    const [topics, setTopics] = useState([]);
    const [searchData, setSearchData] = useState("");
    const [ searchInput, setSearchInput] = useState("");
    const [showSideNavMobile, setShowSideNavMobile] = useState(false);
    const [paginationCurrentPageTopics, setPaginationCurrentPageTopics] = useState(0);
    
    const [loggedInUser, setLoggedInUser] = useState([{
        avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
        name: "Jess Jelly",
        username: "jessjelly"
    }])
    const formatDates = (date) => {
        const newDate = new Date(date).toLocaleDateString("en-US")
        return `${newDate}`;
    }

    return(
        <Context.Provider value={{
            currentTopic, 
            setCurrentTopic,
            formatDates,
            loggedInUser,
            setLoggedInUser,
            allCategories,
            setAllCategories,
            showSearchPopUp,
            setShowSearchPopUp,
            topics,
            setTopics,
            searchData,
            setSearchData,
            searchInput,
            setSearchInput,
            showSideNavMobile,
            setShowSideNavMobile,
            paginationCurrentPageTopics,
            setPaginationCurrentPageTopics
             }}>
        {children}
        </Context.Provider>
      )
}


export default Context;