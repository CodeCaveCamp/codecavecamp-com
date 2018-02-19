import React from 'react';
import { connect } from 'react-redux';
import CourseForm from './CourseForm';
import { addCourse } from '../actions/courses';

const AddCoursePage = (props) => (
    <div className='component-base'>
        <h1>Add Course</h1>
        <CourseForm 
            onSubmit={(course) => {
                props.dispatch(addCourse(course));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddCoursePage);