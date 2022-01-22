import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { addNewTopicRequest } from "../../../../utils/fetchQuestsForums";

import Context from "../../../../contexts/Context";

const AddNewTopic = ({ topics, setTopics }) => {
  const { category_slug } = useParams();
  const { loggedInUser, allCategories, setAllCategories } = useContext(Context);
  const [showDropDown, setShowDropDown] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDesription] = useState("");
  const [designer, setDesigner] = useState("");
  const [categoryDropDown, setCategoryDropDown] = useState("");
  const [catSlug, setCatSlug] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const topicObj = {
      owner: loggedInUser[0].username,
      title: title,
      review_body: description,
      designer: designer,
      category: categoryDropDown,
    };

    addNewTopicRequest(topicObj)
      .then((data) => {
        setErrorMsg("");
        setTitle("");
        setDesription("");
        setDesigner("");
        setTopics([data.review, ...topics]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {!showDropDown && (
        <button className="btn primary" onClick={() => setShowDropDown(true)}>
          Add New Post
        </button>
      )}
      {showDropDown && (
        <div>
          <h3>Add a new post</h3>
          <div className="center60">
              <form onSubmit={handleSubmit}>
                <input
                  required
                  placeholder="Catergory Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {!!errorMsg && <p className="errorMesssage">{errorMsg}</p>}
                <textarea
                  required
                  placeholder="Catergory Description"
                  value={description}
                  onChange={(e) => setDesription(e.target.value)}
                />
                <input
                  required
                  placeholder="Designer"
                  value={designer}
                  onChange={(e) => setDesigner(e.target.value)}
                />

                {allCategories && allCategories.length > 0 ? (
                  <select
                    required
                    onChange={(e) => setCategoryDropDown(e.target.value)}
                  >
                    <option value="">Select Category</option>
                    {allCategories.map((cat, key) => {
                      return (
                        <option value={cat.slug} key={key}>
                          {cat.slug}
                        </option>
                      );
                    })}
                  </select>
                ) : (
                  <select
                    required
                    value={catSlug}
                    onChange={(e) => setCatSlug(e.target.value)}
                  >
                    <option value="">Select Category</option>
                    <option value={category_slug}>{category_slug}</option>
                  </select>
                )}
                <button type="submit" className="btn primary">
                  Add Post
                </button>
              </form>
        </div>
    </div>)}
    </div>
  );
};

export default AddNewTopic;
