import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Context from "../../../contexts/Context";

import About from "./profileComponents/subButtons/About";
import ProfileAboutMe from "./profileComponents/ProfileAboutMe";
import ProfileHeader from "./ProfileHeader";
import Grid108010 from "../../grids/Grid108010";

const Profile = () => {

  const { baseUrl } = useContext(Context);
  let { username } = useParams();

  const [user, setUser] = useState([]);
 
  useEffect(() => {
      fetch(`${baseUrl}/users/${username}`)
      .then(res => res.json())
      .then(data => {
          setUser(data.user);
          console.log(data)
      })
  }, [])

  return (
    <>
      <Grid108010 
        col2={<ProfileHeader user={user}/>}
    />
      <ProfileAboutMe user={user}/>
     <About user={user}/>
  </>
  );
};

export default Profile;