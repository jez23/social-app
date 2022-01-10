import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageTitlebar from '../../pageTitleBar/PageTitlebar';

import Context from '../../../contexts/Context';

import Grid333333 from '../../grids/Grid333333';
import Grid108010 from '../../grids/Grid108010';

const Login = () => {
  
    const [emailLogin, setEmailLogin] = useState("")
    const [passwordLogin, setPasswordLogin] = useState("")

    const { baseUrl} = useContext(Context);




    return (
        <>
            <Grid108010
                col2={
                    <PageTitlebar title="Login"/>
                }
             />
            <Grid333333
                col2={<div >
                    <form >
                        <input placeholder="Email" type="text"  required name="email" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)}></input>
                        <input placeholder="Password" type="password"  required name="password" value={passwordLogin}  onChange={(e) => setPasswordLogin(e.target.value)}></input>
                        <button className="btn primary" type="submit">Submit</button>
                    </form>
                    <h3>Don't have an account?</h3>
                    <Link className="btn secondary" to="/register">Register</Link>
                </div>} />
        </>
    )
}

export default Login;