import uuid from 'uuid'; // create universail identifiers
import database from '../firebase/firebase';

// getCourses (from Redux)
export const getCourses = (courses) => ({
    type: 'GET_COURSES',
    courses
});

// startGetCourese (from Firebase)

// fetch all course data once, and parse the data into an array, disptach setExpenses
export const startGetCourses = () => {
    return (dispatch) => {
        return database.ref('courses').once('value').then((snapshot) => {
            const courses = [];
            snapshot.forEach((childSnapshot) => {
                courses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(getCourses(courses));
        })
    }
};

// addCourse (to Redux)
export const addCourse = (course) => ({
    type: 'ADD_COURSE',
    course
});

// startAddCourse (firebase)
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
