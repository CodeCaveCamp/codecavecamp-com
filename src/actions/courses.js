import uuid from 'uuid'; // create universail identifiers
import database from '../firebase/firebase';

// addCourse (to Redux)
export const addCourse = (course) => ({
    type: 'ADD_COURSE',
    course
});

// startAddCourse (firegbase)
export const startAddCourse = (courseData = {}) => {
    return (dispatch) => {
        const {
            title = '',
            description = '', 
            duration = '',
            level = '', 
            createdAt = 0
        } = courseData;
        const course = { title, description, duration,level,createdAt };
        database.ref('courses').push(course).then((ref) => {
            dispatch(addCourse({
                id: ref.id,
                ...course
            }));
        });
    };
};

// REMOVE_COURSE
export const removeCourse = ( { id } = {} ) => ({
    type: 'REMOVE_COURSE',
    id
});

// EDIT_COURSE
export const editCourse = (id, updates) => ({
    type: 'EDIT_COURSE',
    id,
    updates
});

// GET_COURSES
export const getCourses = (courses) => ({
    type: 'GET_COURSES',
    courses
});