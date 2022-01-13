import React, { useContext, useState } from "react";
import Context from "../../../../contexts/Context";
import Grid206020 from "../../../grids/Grid206020";

const AddNewCatergory = ({ categories, setCategories }) => {

  const { baseUrl } = useContext(Context);

  const [showDropDown, setShowDropDown] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDesription] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${baseUrl}/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
      })})
        .then((res) => {
            if(res.status !== 201){
                setErrorMsg("Category title already exists");
                throw "Category title already exists";
            }else {
                return res.json();
            }
        })
        .then((data) => {
                setErrorMsg("");
                setTitle("");
                setDesription("");
                setCategories([data.category , ...categories]);
        })
        .catch(err => {
            console.log(err)
        })
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
          <Grid206020
            col2={
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
            }
          />
        </div>
      )}
    </div>
  );
};

export default AddNewCatergory;
