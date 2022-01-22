import React, { useEffect, useState } from "react";
import PageTitleBar from '../../../pageTitleBar/PageTitlebar';

import ForumCard from "./ForumCard";
import AddNewCatergory from "./AddNewCatergory";
import { getAllCategoriesRequest } from "../../../../utils/fetchQuestsForums";

const Forums = () => {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
        
      getAllCategoriesRequest()
        .then(data => {
            setCategories(data.categories);
            setIsLoading(false);
        }).catch(err => console.log(err))

    }, [])

  return (
    <div className="pad20-m center80">
          <PageTitleBar title="All Forums" />
          <AddNewCatergory categories={categories} setCategories={setCategories}/>
          <div className="forumTable">
            <div className="forumTable__header">
          {isLoading? <p>Loading....</p> : <div className="cardLists"> {categories.map((category, key) => {
              return <ForumCard category={category} key={`catorgory_${key}`} categories={categories} setCategories={setCategories}/>;
            })} </div>}
            </div>
            </div>
    </div>
  );
};

export default Forums;