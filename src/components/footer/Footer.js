import React from 'react';
import { Link } from 'react-router-dom'; 
import './footer.css';

const Footer = () => {
    return (
        <footer>
           <div>
               <h3>Blog</h3>
               <ul>
                   <li><Link to="/">Home</Link></li>
               </ul>
           </div>
           <div>
               <h3>Tools</h3>
               <ul>
                  
               </ul>
           </div>
           <div>
               <h3>Terms</h3>
               <ul>
                   <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
                   <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                   <li><Link to="/cookie-policy">Cookie Policy</Link></li>
               </ul>
           </div>
           <div>
               <h3>Get Social</h3>
               <ul>
  
               </ul>
           </div>
        </footer>
    )
}

export default Footer;