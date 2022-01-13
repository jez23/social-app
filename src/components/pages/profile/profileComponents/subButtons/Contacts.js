import React, { useContext, useEffect, useState } from "react";
import Context from "../../../../../contexts/Context";
import { Link } from "react-router-dom";

const Contacts = () => {
  const { baseURL } = useContext(Context);

  return (
    <>
      <h2>Contact List</h2>
      <section className="info_card__outerContainer">
        <Link
          className="info_card"
          to={`/profile/`}
        >
          <div>
            <img
              alt={`Profile of`}
              src={``}
            />
            <h4>user name</h4>
          </div>
        </Link>
      </section>
    </>
  );
};

export default Contacts;
