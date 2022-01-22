import React from "react";
import { Link } from "react-router-dom";

const Contacts = () => {

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
