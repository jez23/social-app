import React, { useContext } from 'react';

import Context from "../../../../../contexts/Context";
import Grid108010 from '../../../../grids/Grid108010';

const About = () => {
   
    const { baseURL} = useContext(Context);

    return (
        <Grid108010
            col2={
                <>
                <h3>Name: Test</h3>
                </>
            }
        />
    )
}

export default About;