import React from 'react';
import TeamTile from './TeamTile';

const Team = () => (
    <div  className="team tablet-desktop">
        <h1 className='team-title'>Meet Our Team</h1>
        <p className='team-subtitle'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className='team-profiles'>
            <TeamTile />
            <TeamTile />
            <TeamTile />
            <TeamTile />
            <TeamTile />
            <TeamTile />
            <TeamTile />
            <TeamTile />
        </div>
    </div>
); 

export default Team;