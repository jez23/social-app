import React, {useState, useContext} from 'react';
import { useParams } from "react-router-dom";

import Grid206020 from '../../../grids/Grid206020';
import Context from '../../../../contexts/Context';

const AddNewTopic = ({topics, setTopics}) => {

    const { category_slug } = useParams();
    const { baseUrl, loggedInUser, allCategories, setAllCategories } = useContext(Context);
    const [showDropDown, setShowDropDown] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDesription] = useState('');
    const [designer, setDesigner] = useState('');
    const [categoryDropDown, setCategoryDropDown] = useState('');
    const [catSlug, setCatSlug] = useState(category_slug);
  
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    console.log({
        owner: loggedInUser[0].username,
        title: title,
        review_body: description,
        designer: designer,
        category: categoryDropDown ,
      })
        fetch(`${baseUrl}/reviews`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            owner: loggedInUser[0].username,
            title: title,
            review_body: description,
            designer: designer,
            category: categoryDropDown,
          })})
            .then((res) => {
                
                 if(res.status !== 201){
                    setErrorMsg("Topic title already exists");
                    throw "Topic title already exists";
                }else { 
                    return res.json();
                 } 
            })
            .then((data) => {
    
                setErrorMsg("")
                setTitle('')
                setDesription('');
                setDesigner('');
               
                setTopics([data.review , ...topics])
            })
            .catch(err => console.log(err))
      };
    

    return(
        <div>
            {!showDropDown && <button className="btn primary" onClick={() => setShowDropDown(true)}>Add New Post</button>}
            {showDropDown && <div>
                <h3>Add a new post</h3>
                <Grid206020
                    col2={
                    <form onSubmit={handleSubmit}>
                        <input required placeholder="Catergory Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        {!!errorMsg && <p className="errorMesssage">{errorMsg}</p>}
                        <textarea required placeholder="Catergory Description" value={description} onChange={(e) => setDesription(e.target.value)}/>
                        <input required placeholder="Designer" value={designer} onChange={(e) => setDesigner(e.target.value)} />
                     
                       
                        {allCategories && allCategories.length > 0 ? <select required onChange={(e) => setCategoryDropDown(e.target.value)}>
                            {allCategories.map((cat, key) => {
                                return <option value={cat.slug} key={key}>{cat.slug}</option>
                            })}
                        </select>: <input disabled placeholder={catSlug} value={catSlug}/>}
                        <button type="submit" className="btn primary">Add Post</button>
                    </form>
                }/>
            </div>}
        </div>
    )
}

export default AddNewTopic;