import React from 'react';

import Grid108010 from '../../grids/Grid108010';

const UnauthorisedPermissions = () => {
    return (
        <Grid108010
            col2={
                <>
                    <h1>No Permission</h1>
                    <p>Your current subscription does that allow you access to this feature.</p>
                </>
            }
        />
    )
}

export default UnauthorisedPermissions;