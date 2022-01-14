import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom"; 

/* import { CSSTransition } from "react-transition-group"; */

import Context from '../../contexts/Context';

import SearchInput from './SearchInput';
import Grid108010 from '../grids/Grid108010';
import Grid206020 from '../grids/Grid206020';

const SearchPopUp = () => {

    const {   
        showSearchPopUp,
        setShowSearchPopUp,
        searchData } = useContext(Context);


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
                        <button className="btn secondary" onClick={() => setShowSearchPopUp(!showSearchPopUp)}>Close</button>
                    </div>
                    <SearchInput />
                    {searchData && <p className="searchContainer__numResult">{searchData.count? searchData.count : ''} results</p>}
                    {searchData && searchData.resultsArticles && <h3>Articles</h3>}
                    {searchData && (searchData.resultsArticles.length > 0 ? searchData.resultsArticles.map(post => {
                        return <div><Link to={`/articles/${post.slug}`} onClick={() => setShowSearchPopUp(!showSearchPopUp)}><p>{post.title}</p></Link></div>
                    }) : <p>No articles found matching this search.</p>)}
                    {searchData && searchData.resultsExercises && <h3>Exercises</h3>}
                    {searchData && (searchData.resultsExercises.length > 0 ? searchData.resultsExercises.map(post => {
                        return <div><Link to={`/exercise/${post.slug}`} onClick={() => setShowSearchPopUp(!showSearchPopUp)}><p>{post.title}</p></Link></div>
                    }): <p>No exercises found matching this search.</p>)}
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