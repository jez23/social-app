import React from 'react';

const About = ({ user }) => {
    return (
        <div className="center80">
                <h3>Username: {user.username}</h3>
                <h3>Name: {user.name}</h3>
        </div>
    )
}

export default About;