import React, { useState } from 'react';

const Filters = ({queries, setQueries}) => {

    const [categoryQuery, setCategoryQuery ] = useState('')
    const [orderQuery, setOrderQuery] = useState('')
    const [sortByQuery, setSortByQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log({
            categoryQuery,
            orderQuery,
            sortByQuery
        })

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
            console.log(removeAnd)
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
                <option value="strategy">strategy</option>
                <option value="hidden-roles">hidden-roles</option>
                <option value="dexterity">dexterity</option>
                <option value="push-your-luck">push-your-luck</option>
                <option value="roll-and-write">roll-and-write</option>
                <option value="deck-building">deck-building</option>
                <option value="engine-building">engine-building</option>
            </select>
            <button type="submit" class="btn secondary">Filter</button>
        </form>


       {/*  <form>
         <select value={categoryQuery} onChange={(e) => setCategoryQuery(e.target.value)}>
                <option value="strategy">strategy</option>
                <option value="hidden-roles">hidden-roles</option>
                <option value="dexterity">dexterity</option>
                <option value="push-your-luck">push-your-luck</option>
                <option value="roll-and-write">roll-and-write</option>
                <option value="deck-building">deck-building</option>
                <option value="engine-building">engine-building</option>
            </select>
            <button type="submit" class="btn secondary">Filter</button>
        </form> */}

        </div>
    )
}

export default Filters;