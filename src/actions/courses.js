import uuid from 'uuid'; // create universail identifiers
import database from '../firebase/firebase';

// ADD_COURSE
export const addCourse = (course) => ({
    type: 'ADD_COURSE',
    course
});

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