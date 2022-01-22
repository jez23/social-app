import React from "react";
import { Link } from "react-router-dom";

const Unauthorised = () => {
  return (
    <div className="center80">
      <h1>Not Authorised</h1>
      <p>
        You must log in to access this content (Register for a free account - no
        payment information taken):
      </p>
      <div className="pad20 grid5050">
        <div className="grid5050__col1 pad20">
          <Link to="/login" className="btn primary">
            Login
          </Link>
        </div>
        <div className="grid5050__col2 pad20">
          <Link to="/register" className="btn primary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorised;
