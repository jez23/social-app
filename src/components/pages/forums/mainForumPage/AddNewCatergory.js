import React, { useContext, useState } from "react";
import Context from "../../../../contexts/Context";

import { addNewCatergoryRequest } from "../../../../utils/fetchQuestsForums";

const AddNewCatergory = ({ categories, setCategories }) => {
  const { loggedInUser } = useContext(Context);

  const [showDropDown, setShowDropDown] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDesription] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewCatergoryRequest(title, description, loggedInUser[0].username)
      .then((data) => {
        setErrorMsg("");
        setTitle("");
        setDesription("");
        setCategories([data.category, ...categories]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {!showDropDown && (
        <button className="btn primary" onClick={() => setShowDropDown(true)}>
          Add New Topic
        </button>
      )}
      {showDropDown && (
        <div>
          <h3>Add a new catergory</h3>
          <div className="center60">
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="Catergory Title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {!!errorMsg && <p className="errorMesssage">{errorMsg}</p>}
                <textarea
                  placeholder="Catergory Description"
                  required
                  value={description}
                  onChange={(e) => setDesription(e.target.value)}
                />
                <button type="submit" className="btn primary">
                  Add Topic
                </button>
              </form>
          </div>
    </div>)}

    </div>
  );
};

export default AddNewCatergory;
