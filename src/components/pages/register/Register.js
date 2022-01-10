import React, { useState, useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import Context from '../../../contexts/Context';

import PageTitleBar from "../../pageTitleBar/PageTitlebar";
import Grid333333 from "../../grids/Grid333333";

import Grid108010 from "../../grids/Grid108010";

const Register = () => {
  const [nameReg, setName] = useState();
  const [emailReg, setEmail] = useState();
  const [passwordReg, setPassword] = useState();


 

  return (
    <>
      <Grid108010
        col2={ <PageTitleBar title="Register" />}
      />
      <Grid333333
        col2={<div className="registerAuth">
          <form >
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
            <button className="btn primary" type="submit">Submit</button>
          </form>
          <h3>Already have an account?</h3>
                    <Link className="btn secondary" to="/login">Login</Link>
        </div>} />
    </>
  );
};

export default Register;