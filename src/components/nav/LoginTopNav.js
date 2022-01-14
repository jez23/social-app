import React, { useContext } from 'react';
import { Link, withRouter } from 'react-router-dom'; 

import Context from '../../contexts/Context';


const LoginTopNav = () => {

    const { baseUrl, loggedInUser, setShowSearchPopUp } = useContext(Context);
   
   const logo = `https://www.pinclipart.com/picdir/big/347-3475475_generic-company-logo-clipart-best-generic-company-logo.png`;
   
    return (
        <div className="header__login">
           

            <div className="header__login__search">
                    <button className="btn primary" onClick={() => setShowSearchPopUp(true)}><i className="fa fa-search" aria-hidden="true"></i><span className="searchWording">Search</span></button>
                </div>

                <div className="header__login__logo">
                    <Link to='/'><img src={logo} alt="Urbacise Logo"/></Link>
                </div>
              
            <div className="header__login__login">
                <ul>
                {!loggedInUser &&  <><li><Link to="/login" className="btn primary">Login</Link></li>
                    <li><Link to="/register" className="btn primary">Register</Link></li></>}
                  {loggedInUser &&  <><li><button className="btn primary">Logout</button></li>
                    <li><button className="btn primary">Account</button></li></> }
                </ul>
            </div>
        </div>
    )
}

export default LoginTopNav;