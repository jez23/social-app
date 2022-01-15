import React, { useEffect, useContext, useState } from "react";
import { Link } from 'react-router-dom'; 
import Context from '../../../../contexts/Context';

import PageTitleBar from '../../../pageTitleBar/PageTitlebar';
import ForumPageTableLayout from "../ForumPageTableLayout";
import ForumCard from "./ForumCard";
import AddNewCatergory from "./AddNewCatergory";
import Grid108010 from "../../../grids/Grid108010";
  
const Forums = () => {

    const { baseUrl } = useContext(Context);

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
        fetch(`${baseUrl}/categories`)
        .then(res => res.json())
        .then(data => {
            setCategories(data.categories);
            setIsLoading(false);
        }).catch(err => console.log(err))

    }, [])

  return (
    <Grid108010
      custClassMain={"pad20-m"}
      col2={
        <>
          <PageTitleBar title="Forums" />
          <AddNewCatergory categories={categories} setCategories={setCategories}/>
          <ForumPageTableLayout>
          {isLoading? <p>Loading....</p> : <div className="cardLists"> {categories.map((category, key) => {
              return <ForumCard category={category} key={`catorgory_${key}`} categories={categories} setCategories={setCategories}/>;
            })} </div>}
            </ForumPageTableLayout>
        </>
      }
    />
  );
};

export default Forums;