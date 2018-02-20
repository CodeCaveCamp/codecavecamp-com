import React from 'react';
import { connect } from 'react-redux';
import TeamMemberForm from './TeamMemberForm';
import { startAddTeamMember } from '../actions/teamMembers';

export class AddTeamMemberPage extends React.Component {
    onSubmit = (teamMember) => {
        this.props.startAddTeamMember(teamMember);
        this.props.history.push('/');
    };
    render () {
        return (
            <div className = 'component-base'>
                <h1>Add Team Member</h1>
                <TeamMemberForm
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddTeamMember: (teamMember) => dispatch(startAddTeamMember(teamMember))
});

export default connect(undefined, mapDispatchToProps)(AddTeamMemberPage);