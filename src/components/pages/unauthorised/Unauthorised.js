import React from 'react';
import { Link } from 'react-router-dom';

import Grid5050 from '../../grids/Grid5050';
import Grid108010 from "../../grids/Grid108010";

const Unauthorised = () => {
    return (
        <Grid108010
            col2={
                <>
                    <h1>Not Authorised</h1>
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

export default Unauthorised;