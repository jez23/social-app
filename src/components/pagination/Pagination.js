import React from 'react';

const Pagination = ({ paginationObj } ) => {
    let pages = null;
    const create = () => {
        pages = Math.ceil(paginationObj.total / paginationObj.resultsPerPage);
      /*   console.log("pages",  pages) */
        return new Array(pages).fill(<p></p>)
    }

    return (
        <div className="pagination">
        { paginationObj.currentPage > 1? <div className="pagination__button" onClick={() => paginationObj.setNum(paginationObj.prev.page)}><i className="fa fa-chevron-left" aria-hidden="true"></i></div>: '' }
        {paginationObj.total && create().map((num, key) => {
            return key + 1 === paginationObj.currentPage ?  <div key={`pagination${key}`} className="active pagination__button">{key + 1}</div>: <div key={`pagination${key}`} className="pagination__button" onClick={() => paginationObj.setNum(key + 1)}>{key + 1}</div>;
        })}
        { paginationObj.currentPage <= pages - 1 ? <div className="pagination__button" onClick={() => paginationObj.setNum(paginationObj.next.page)}><i className="fa fa-chevron-right" aria-hidden="true"></i></div>: ''} 
        </div>
    )
}

export default Pagination;