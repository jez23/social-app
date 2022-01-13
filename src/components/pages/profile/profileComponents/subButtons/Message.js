import React, { useState, useContext } from 'react';

import Grid108010 from '../../../../grids/Grid108010';

import Context from "../../../../../contexts/Context";

const Message = () => {

    const { baseUrl } = useContext(Context);


    const [message, setMessage] = useState('');
 
    const handleSubmit = () => {

    }
    return (
        <Grid108010 
            col2={
                <form onSubmit={handleSubmit}>
                    <textarea placeholder="Write Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button className="btn primary">Send</button>
                </form>
            }
        />
    )
}

export default Message;