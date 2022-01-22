import React, { useState } from 'react';

const Message = () => {

    const [message, setMessage] = useState('');
 
    const handleSubmit = () => {

    }
    return (
        <div className="center80">
                <form onSubmit={handleSubmit}>
                    <textarea placeholder="Write Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button className="btn primary">Send</button>
                </form>
        </div>
    )
}

export default Message;