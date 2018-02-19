import React from 'react';
import { connect } from 'react-redux';
import CourseForm from './CourseForm';
import { startAddCourse } from '../actions/courses';


export class AddCoursePage extends React.Component {
    onSubmit = (course) => {
        this.props.startAddCourse(course);
        this.props.history.push('/');
    };
    render () {
        return (
            <div className='component-base'>
                <h1>Add Course</h1>
                <CourseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddCourse: (course) => dispatch(startAddCourse(course))
});

export default connect(undefined, mapDispatchToProps)(AddCoursePage);