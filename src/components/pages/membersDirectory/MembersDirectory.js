import React, { useContext, useEffect, useState } from "react";
import { getAllUsersRequest } from '../../../utils/fetchQuestsUsers'; 
import Context from "../../../contexts/Context";

import PageTitleBar from "../../pageTitleBar/PageTitlebar";
import InfoCard from "../../infoCard/InfoCard";

const MembersDirectory = ({ history }) => {

  const [memberProfiles, setMemberProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllUsersRequest()
    .then(data => {
        setMemberProfiles(data.users);
        setIsLoading(false);
    })
    .catch(err => console.log(err));

  }, []); 

  return (
    <>
      <div className="center80">
            <PageTitleBar title="Members Directory" />
      </div>

      {isLoading? <div className="center80"><p>Loading....</p></div>
      :<div className="center80">
          <section className="info_card__outerContainer">
            {memberProfiles.map((user, i) => {
              return (
                <InfoCard
                  key={`profile${i}`}
                  user={user}
                />
              );
            })}
          </section>
      </div>}
    </>
  );
};

export default MembersDirectory;
