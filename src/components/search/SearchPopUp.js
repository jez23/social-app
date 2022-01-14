import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom"; 
import TopicCard from './../pages/forums/topics/TopicCard';

/* import { CSSTransition } from "react-transition-group"; */

import Context from '../../contexts/Context';

import SearchInput from './SearchInput';
import Grid108010 from '../grids/Grid108010';
import Grid206020 from '../grids/Grid206020';

const SearchPopUp = () => {

    const {   
        showSearchPopUp,
        setShowSearchPopUp,
        searchData,
        setSearchData,
        searchInput,
        setSearchInput, } = useContext(Context);

const handleClose = () => {
    setShowSearchPopUp(!showSearchPopUp);
    setSearchData([]);
    setSearchInput('');
}

return ReactDOM.createPortal(
    showSearchPopUp &&  
    
  /*   <CSSTransition
    in={showSearchPopUp}
    timeout={500}
    classNames={"searchPopUp"}
    unmountOnExit={true}
  > */
  <div className="searchPopUp">
        <Grid108010
            col2={
                <>
                   
                    <Grid206020
                    
                    col2={
                    <div className="searchContainer">
                    <div className="searchContainer__close">
                        <button className="btn secondary" onClick={handleClose}>Close</button>
                    </div>
                    <SearchInput />
                    {searchData && searchData.map(topic => {
                        return <TopicCard topic={topic} topics={searchData} setTopics={setSearchData}/>
                    })}
                    </div>
                }/>
                </>
            }
        />
    </div>
   /*  </CSSTransition> */,
    document.getElementById('searchPopUp')
)
}

export default SearchPopUp;