import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageTitlebar from '../../pageTitleBar/PageTitlebar';

const Login = () => {
  
    const [emailLogin, setEmailLogin] = useState("")
    const [passwordLogin, setPasswordLogin] = useState("");

    return (
        <>
            <div className='center80'>
                    <PageTitlebar title="Login"/>
            </div>
            <div className="center33">
                    <form >
                        <input placeholder="Email" type="text"  required name="email" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)}></input>
                        <input placeholder="Password" type="password"  required name="password" value={passwordLogin}  onChange={(e) => setPasswordLogin(e.target.value)}></input>
                        <button className="btn primary" type="submit">Submit</button>
                    </form>
                    <h3>Don't have an account?</h3>
                    <Link className="btn secondary" to="/register">Register</Link>
                </div>
            </>
    )
}

export default Login;