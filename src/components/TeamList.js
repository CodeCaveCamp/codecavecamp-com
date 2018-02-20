import React from 'react';
import TeamTile from './TeamTile';
import { connect } from 'react-redux';
import selectTeamMembers from '../selectors/teamMembers';

const Team = (props) => (
    <div  className="component-base team tablet-desktop">
        <div className='component-base__header'>
            <h1 className='component-base__title'>Meet Our Team</h1>
            <p className='component-base__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='team-profiles'>
            {props.teamMembers.map((teamMember) => {
                return <TeamTile key={teamMember.id} {...teamMember} />
            })}
        </div>
    </div>
); 

const mapStateToProps = (state) => ({
    teamMembers: state.teamMembers
});

export default connect(mapStateToProps)(Team);