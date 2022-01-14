import React, { useContext, useEffect, useState } from 'react';

import Context from '../../contexts/Context';

const SearchInput = () => {

    const {
        searchInput,
        setSearchInput,
        setSearchData,
        baseUrl
    } = useContext(Context);

   const [runSearch, setRunSearch] = useState(false)

      useEffect(() => {
        fetch(`${baseUrl}/reviews?title=${searchInput}`)
          .then(response => response.json())
          .then(data => {
          })

      }, [runSearch]); 

      const startSearch = (e) =>{
        if (e.key === 'Enter') {
            setRunSearch(!runSearch);
          }

      }

    return (
        <div className="searchInput">
            <input placeholder="search" name="Search" value={searchInput} onKeyDown={e => startSearch(e)} onChange={(e) => setSearchInput(e.target.value.toLowerCase()) }/>
            <div className="searchInput__icon" onClick={() => setRunSearch(!runSearch)}>
                <i className="fa fa-search" aria-hidden="true"></i>
            </div>
        </div>   
    )
}

export default SearchInput;