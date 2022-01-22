import React, { useState } from "react";
import { Link } from "react-router-dom";

import PageTitleBar from "../../pageTitleBar/PageTitlebar";

const Register = () => {
  const [nameReg, setName] = useState();
  const [emailReg, setEmail] = useState();
  const [passwordReg, setPassword] = useState();

  return (
    <>
      <div className="center80">
        <PageTitleBar title="Register" />
      </div>
     
          <div className="registerAuth center33">
            <form>
              <input
                placeholder="User Name"
                name="name"
                required
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                placeholder="Email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                placeholder="Password"
                name="password"
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <button className="btn primary" type="submit">
                Submit
              </button>
            </form>
            <h3>Already have an account?</h3>
            <Link className="btn secondary" to="/login">
              Login
            </Link>
          </div>
    </>
  );
};

export default Register;
