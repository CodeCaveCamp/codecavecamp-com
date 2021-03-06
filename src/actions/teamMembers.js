import database from '../firebase/firebase';
import { moment } from 'moment';

// getTeamMembers (from Redux)
export const getTeamMembers = (teamMembers) => ({
    type: 'GET_TEAM_MEMBERS',
    teamMembers
});

// startGetTeamMembers (from Firebase)
// snapshot contains data from the database location (in this case teamMembers)
export const startGetTeamMembers = () => {
    return (dispatch) => {
        return database.ref('teamMembers').once('value').then((snapshot) => {
            // convert the data from snapshot to turn it into an array of data
            const teamMembers = [];
            // childSnapshot holds the content of each child
            snapshot.forEach((childSnapshot) => {
                teamMembers.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(getTeamMembers(teamMembers));
        })
    }
};

// addTeamMember (to Redux)
export const addTeamMember = (teamMember) => ({
    type: 'ADD_TEAM_MEMBER',
    teamMember
})

export const startAddTeamMember = (teamMemberData = {}) => {
    return (dispatch) => {
        const {
            name = '',
            title = '',
            bio = '',
            status = '',
            displayOrder = 0,
            linkedIn ='',
            facebook = '',
            twitter = '',
            dribbble = '',
            profileImageURL = '',
            createdAt = 0
        } = teamMemberData;
        const teamMember = { name, title, bio, status, displayOrder, linkedIn, facebook, twitter, dribbble, profileImageURL, createdAt };
        database.ref('teamMembers').push(teamMember).then((ref) => {
            dispatch(addTeamMember({
                id: ref.id,
                ...teamMember
            }));
        });
    };
};

// remove teamMember (from Redux)
export const removeTeamMember = ({ id } = {}) => ({
    type: 'REMOVE_TEAM_MEMBER',
    id
});

export const editTeamMember = (id, updates) => ({
    type: 'EDIT_TEAM_MEMBER',
    id,
    updates
});