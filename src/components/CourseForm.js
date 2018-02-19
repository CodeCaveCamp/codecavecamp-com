import React from 'react';

export default class CourseForm extends React.Component {
    state = {
        title: '',
        description: '',
        duration: '',
        level: '',
        error: ''
    };

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onDurationChange = (e) => {
        const duration = e.target.value;
        this.setState(() => ({ duration }));
    };

    onLevelChange = (e) => {
        const level = e.target.value;
        this.setState(() => ({ level }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.title) {
            this.setState(() => ({ error: 'Please provide a title for this course.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                title: this.state.title,
                description: this.state.description,
                duration: this.state.duration,
                level: this.state.level
            });
        }
    }

    render () {
        return (
            <form className='form' onSubmit={this.onSubmit}>
                { this.state.error && <p className='form__error'>{this.state.error}</p> }
                <input 
                    autoFocus
                    type='text' 
                    className='text-input'
                    placeholder='Course Title'
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />
                <textarea
                    className='textarea'
                    placeholder='Description'
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                >
                </textarea>
                <input 
                    type='text' 
                    className='text-input'
                    placeholder='Duration'
                    value={this.state.duration}
                    onChange={this.onDurationChange}
                />
                <input 
                    type='text' 
                    className='text-input'
                    placeholder='Level'
                    value={this.state.level}
                    onChange={this.onLevelChange}
                />
                <div>
                    <button className='button'>
                        Save Course
                    </button>
                </div>
            </form>
        )
    }
}