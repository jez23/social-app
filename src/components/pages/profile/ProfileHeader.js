import React from "react";

import ProfileImage from "./profileImage/ProfileImage";

const ProfileHeader = ({user}) => {
  return (
    <div className="profileHeader">
      <div className="profileHeader__heroBanner">
        <img src={`test`} alt={`Background image for ${user.username}`}/>
      </div>
      <div className="profileHeader__profileImage">
          <ProfileImage user={user}/>
      </div> 
    </div> 
  );
};

export default ProfileHeader;