import React from 'react';
import { Link } from 'react-router-dom';

import Grid108010 from '../../grids/Grid108010';
import Grid5050 from '../../grids/Grid5050';

const UnauthorisedCompnent = () => {
    return (
        <Grid108010
            col2={
                <>
                    <h3>Not Authorised</h3>
                    <p>You must log in to access this content (Register for a free account - no payment information taken):</p>
                        <Grid5050
                            custClassMain={"pad20"}
                            custClassCol1={"pad20"}
                            custClassCol2={"pad20"}
                            col1={<Link to="/login" className="btn primary">Login</Link>}
                            col2={<Link to="/register" className="btn primary">Register</Link>}
                        />
                </>
            }
        />
    )
}

export default UnauthorisedCompnent;