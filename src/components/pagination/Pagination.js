import React, { useContext, useEffect, useState } from 'react';
import Context from '../../contexts/Context';

const Pagination = ({ totalCount } ) => {

    const {   paginationCurrentPageTopics,
            setPaginationCurrentPageTopics } = useContext(Context);

    const [ resultsPerPage, setResultsPerPage ] = useState(10);
    const [ totalTopics, setTotalTopics] = useState(totalCount)
    const [ pagesEmptyArray, setPagesEmptyArray ] = useState(null);

    useEffect(() => {
        setPagesEmptyArray(new Array(Math.ceil(totalTopics / resultsPerPage)).fill(<p></p>));
    }, [])

    return (
        <div className="pagination">
         { pagesEmptyArray &&  paginationCurrentPageTopics > 0 ? <div className="pagination__button" onClick={() => setPaginationCurrentPageTopics((current) => current - 1)}><i className="fa fa-chevron-left" aria-hidden="true"></i></div>: '' }
        { pagesEmptyArray && pagesEmptyArray.map((empty, key) => {
            if(key === paginationCurrentPageTopics){
                return <div key={`pagination${key}`} className="active pagination__button">{key + 1}</div>
            } else {
                return <div key={`pagination${key}`} className="pagination__button" onClick={() => setPaginationCurrentPageTopics(key)}>{key + 1}</div>
            }
        })}
        { pagesEmptyArray && paginationCurrentPageTopics < pagesEmptyArray.length - 1? <div className="pagination__button" onClick={() => setPaginationCurrentPageTopics((current) => current + 1)}><i className="fa fa-chevron-right" aria-hidden="true"></i></div>: ''}
        </div>
    )
}

export default Pagination;