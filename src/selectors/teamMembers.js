// Visible courses sort by Title

export default (teamMembers) => {
    return teamMembers.sort((a, b) => {
        return a.displayOrder > b.displayOrder ? 1 : -1;
    });
};