const teamReducersDefaultState = [];

export default (state = teamReducersDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TEAM_MEMEBER':
            return [
                ...state,
                action.teamMember
            ];
        case 'REMOVE_TEAM_MEMEBER':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_TEAM_MEMBER':
            return state.map((teamMember) => {
                if (teamMember.id === action.id) {
                    return {
                        ...teamMember,
                        ...action.updates
                    }
                } else {
                    return teamMember;  
                }
            });
        case 'GET_TEAM_MEMBERS':
            return action.teamMembers;
        default: 
            return state;
    }
}