import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleUserRequest } from "../../../utils/fetchQuestsUsers";

import About from "./profileComponents/subButtons/About";
import ProfileAboutMe from "./profileComponents/ProfileAboutMe";
import ProfileHeader from "./ProfileHeader";

const Profile = () => {
  let { username } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    getSingleUserRequest(username)
      .then((data) => {
        setUser(data.user);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="center80">
        <ProfileHeader user={user} />
      </div>
      <ProfileAboutMe user={user} />
      <About user={user} />
    </>
  );
};

export default Profile;
