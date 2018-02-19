import React from 'react';
import { connect } from 'react-redux';
import CourseForm from './CourseForm';
import { editCourse, removeCourse } from '../actions/courses';

const EditCoursePage = (props) => {
    return (
        <div className='component-base'>
            <h1>Edit Course</h1>
            <CourseForm 
                course={props.course}
                onSubmit={(course) => {
                    props.dispatch(editCourse(props.course.id, course));
                    props.history.push('/courses');
                }}
            />
            <button className='button'
                onClick={() => {
                    props.dispatch(removeCourse({id: props.course.id}));
                    props.history.push('/courses');
                }}>Remove Course
            </button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        course: state.courses.find((course) => course.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditCoursePage);