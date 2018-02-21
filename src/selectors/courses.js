// Visible courses sort by Title

export default (courses) => {
    return courses.sort((a, b) => {
        return a.title > b.title ? 1 : -1;
    });
};