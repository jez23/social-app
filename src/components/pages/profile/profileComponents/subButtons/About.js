import React, { useContext } from 'react';

import Context from "../../../../../contexts/Context";
import Grid108010 from '../../../../grids/Grid108010';

const About = ({ user }) => {
   
    const { baseURL} = useContext(Context);

    return (
        <Grid108010
            col2={
                <>
                <h3>Username: {user.username}</h3>
                <h3>Name: {user.name}</h3>
                </>
            }
        />
    )
}

export default About;