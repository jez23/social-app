import React, { useContext, useState } from "react";
import { getSearchResultsRequest } from "../../utils/fetchQuestsSearch";
import Context from "../../contexts/Context";

const SearchInput = () => {
  const { searchInput, setSearchInput, setSearchData, baseUrl } =
    useContext(Context);

  const [runSearch, setRunSearch] = useState(false);

  const startSearch = (e) => {
    e.preventDefault();

    getSearchResultsRequest(searchInput)
      .then((data) => {
        setSearchData(data.reviews);
      })
      .catch((err) => console.log(err));
    setRunSearch(!runSearch);
  };

  return (
    <div className="searchInput">
      <form onSubmit={startSearch}>
        <input
          placeholder="search"
          name="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
        />

        <button className="searchInput__icon">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
