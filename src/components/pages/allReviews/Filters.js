import React, { useContext, useState } from 'react';
import Context from '../../../contexts/Context';

const Filters = ({queries, setQueries}) => {

    const { allCategories , setPaginationCurrentPageTopics} = useContext(Context);

    const [categoryQuery, setCategoryQuery ] = useState('')
    const [orderQuery, setOrderQuery] = useState('')
    const [sortByQuery, setSortByQuery] = useState('')

    const handleReset = () => {
        setCategoryQuery('');
        setOrderQuery('');
        setSortByQuery('');
        setQueries('');
        setPaginationCurrentPageTopics(0);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       
        let queryArray = [];

        if(categoryQuery){
            queryArray.push(`category=${categoryQuery}`);
        }
        if(orderQuery){
            queryArray.push(`order=${orderQuery}`);
        }
        if(sortByQuery){
            queryArray.push(`sort_by=${sortByQuery}`);
        }

        if(queryArray.length > 0){
            queryArray.unshift('?'); 
            let joinQuery = queryArray.join("&");
            let removeAnd = joinQuery.replace(joinQuery.charAt(1), "");
            setQueries(removeAnd)
        }

    }

    return (
        <div className="filters">   
        <form onSubmit={handleSubmit}>
            <select value={sortByQuery} onChange={(e) => setSortByQuery(e.target.value)}>
                <option value="">Select Sort By</option>
                <option value="title">title</option>
                <option value="designer">designer</option>
                <option value="owner">owner</option>
                <option value="category">category</option>
                <option value="created_at">created_at</option>
                <option value="votes">votes</option>
            </select> 
            <select value={orderQuery} onChange={(e) => setOrderQuery(e.target.value)}>
                <option value="">Select Order</option>
                <option value="asc">asc</option>
                <option value="desc">desc</option>
            </select>
            <select value={categoryQuery} onChange={(e) => setCategoryQuery(e.target.value)}>
                <option value="">Select Category</option>
                {allCategories && allCategories.map((category, key) => {
                     return   <option value={category.slug} key={`cat-${key}`}>{category.title}</option>;
                })}
            </select>
            <button type="submit" className="btn secondary">Filter</button>
            <button className="btn tertiary" onClick={handleReset}>Reset</button>
        </form>
        </div>
    )
}

export default Filters;