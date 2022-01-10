import React, { useContext } from 'react';
import { Link, withRouter } from 'react-router-dom'; 

import Context from '../../contexts/Context';


const LoginTopNav = ({ history }) => {



    const { baseUrl } = useContext(Context);


   
   const logo = `https://urbacise.s3-us-west-1.amazonaws.com/app/logos/urbacise/logo236x50.png`;
   
    return (
        <div className="header__login">
           

            <div className="header__login__search">
                    <button className="btn primary"><i className="fa fa-search" aria-hidden="true"></i><span className="searchWording">Search</span></button>
                </div>

                <div className="header__login__logo">
                    <Link to='/'><img src={logo} alt="Urbacise Logo"/></Link>
                </div>
              
            <div className="header__login__login">
                <ul>
                     <li><Link to="/login" className="btn primary">Login</Link></li>
                    <li><Link to="/register" className="btn primary">Register</Link></li>
                   <li><button className="btn primary">Logout</button></li>
                    <li><button className="btn primary">Account</button></li> 
                </ul>
            </div>
        </div>
    )
}

export default LoginTopNav;