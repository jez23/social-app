import React from 'react';
import { Link } from 'react-router-dom'; 

const InfoCard = ({ user }) => {

    return (

        <Link  to={`profile/${user.username}`} className="global__cardLink"> 
            <div className="info_card"> 
                 <div className="info_card__img">
                     <img src={user.avatar_url} alt={`${user.username}`}></img>
                </div> 
                <div className="info_card__meta">
                   {/*  { current.title && <h3>{current.title}</h3>} */}
                   <h3>{user.username}</h3>
                </div>
            </div>
       </Link> 
    
    )
}

export default InfoCard;