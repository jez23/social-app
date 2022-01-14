import React, { useContext } from 'react';
import { Link, withRouter } from 'react-router-dom'; 

import Context from '../../contexts/Context';


const LoginTopNav = () => {

    const { baseUrl, loggedInUser, setShowSearchPopUp, setLoggedInUser } = useContext(Context);
   
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
             
                  {loggedInUser.length > 0? <><li><button className="btn primary" onClick={() => setLoggedInUser([])}>Logout</button></li>
                    <li><Link to={`/members-directory/profile/${loggedInUser[0].username}`} className="btn primary" >Account</Link></li></>: <><li><Link to="/login" className="btn primary">Login</Link></li>
                    <li><Link to="/register" className="btn primary">Register</Link></li></> }
                </ul>
            </div>
        </div>
    )
}

export default LoginTopNav;