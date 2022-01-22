import React, { useContext } from "react";
import ReactDOM from "react-dom";
import TopicCard from "../pages/forums/topicsListPage/TopicCard";

/* import { CSSTransition } from "react-transition-group"; */
import Context from "../../contexts/Context";

import SearchInput from "./SearchInput";

const SearchPopUp = () => {
  const {
    showSearchPopUp,
    setShowSearchPopUp,
    searchData,
    setSearchData,
    searchInput,
    setSearchInput,
  } = useContext(Context);

  const handleClose = () => {
    setShowSearchPopUp(!showSearchPopUp);
    setSearchData([]);
    setSearchInput("");
  };

  return ReactDOM.createPortal(
    showSearchPopUp && (
      /*   <CSSTransition
    in={showSearchPopUp}
    timeout={500}
    classNames={"searchPopUp"}
    unmountOnExit={true}
  > */
      <div className="searchPopUp">
        <div className="center80">
          <div className="center60">
              <div className="searchContainer">
                <div className="searchContainer__close">
                  <button className="btn secondary" onClick={handleClose}>
                    Close
                  </button>
                </div>
                <SearchInput />
                {searchData &&
                  searchData.map((topic) => {
                    return (
                      <TopicCard
                        topic={topic}
                        topics={searchData}
                        setTopics={setSearchData}
                      />
                    );
                  })}
              </div>
            </div>
        </div>
      </div>
    ),
    /*  </CSSTransition> */ document.getElementById("searchPopUp")
  );
};

export default SearchPopUp;
