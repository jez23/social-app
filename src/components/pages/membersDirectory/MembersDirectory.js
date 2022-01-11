import React, { useContext, useEffect, useState } from "react";

import Context from "../../../contexts/Context";

import PageTitleBar from "../../pageTitleBar/PageTitlebar";
import Grid108010 from "../../grids/Grid108010";
import Grid206020 from "../../grids/Grid206020";
import InfoCard from "../../infoCard/InfoCard";

const MembersDirectory = ({ history }) => {
  const { baseUrl } = useContext(Context);

  const [memberProfiles, setMemberProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    return fetch(`${baseUrl}/users`)
    .then(response => {
        return response.json()
    }).then(data => {
        console.log(data)
        setMemberProfiles(data.users);
        setIsLoading(false);
    })
    .catch(err => console.log(err));

  }, []); 

  return (
    <>
      <Grid108010
        col2={
          <>
            <PageTitleBar title="Members Directory" />
          </>
        }
      />

      {isLoading? <Grid108010 col2={ <p>Loading....</p>} />
      :<Grid108010
        col2={
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
        }
      />}
    </>
  );
};

export default MembersDirectory;
