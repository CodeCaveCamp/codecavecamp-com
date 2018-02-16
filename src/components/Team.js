import React from 'react';
import TeamTile from './TeamTile';

const Team = () => (
    <div  className="component-base team tablet-desktop">
        <div className='component-base__header'>
            <h1 className='component-base__title'>Meet Our Team</h1>
            <p className='component-base__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
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