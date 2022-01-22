import React, { useState } from "react";

import EditProfileImage from './EditProfileImage';

const ProfileImage = ({user}) => {  

    const [showEditPofile, setShowEditProfile] = useState(false);
    const [showEditPofileImage , setShowEditPofileImage] = useState(false);

  return (
    <div className="profileImage"> 
      <img alt={`${user.username}`} src={`${user.avatar_url}`} onClick={() => setShowEditProfile(!showEditPofile)}/>
      {showEditPofile && <div className="profileImage__editDrop">
        <button className="btn tertiary" onClick={() =>  setShowEditPofileImage(true)}>Change Image</button>

        {showEditPofileImage && <EditProfileImage />}

      </div>}
    </div>
  ) 
};

export default ProfileImage;