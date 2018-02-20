import React from 'react';

const TeamTile = ({ id, name, title, bio}) => (
    <div  className="team-tile">
        <img className='profile-icon' src='/images/icon-team-profile.png' />
        <div className='team-member-name'>{ name }</div>
        <div className='team-member-title'>{ title }</div>
        <div className='social-media-icons'>
            <img className='social-icon' src='/images/icon-twitter.png' />
            <img className='social-icon' src='/images/icon-facebook.png' />
            <img className='social-icon' src='/images/icon-dribble.png' />
        </div>
    </div>
); 

export default TeamTile;