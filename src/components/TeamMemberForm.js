import React from 'react';
import moment from 'moment';

const now = moment();

export default class TeamMemberForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.teamMember ? props.teamMember.name : '',
            title: props.teamMember ? props.teamMember.title : '',
            bio: props.teamMember ? props.teamMember.bio : '',
            errors: ''
        };
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };

    onBioChange = (e) => {
        const bio = e.target.value;
        this.setState(() => ({ bio }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.name) {
            this.setState(() => ({ error: 'Please provide a name for this Team Member'}));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                name: this.state.name,
                title: this.state.title,
                bio: this.state.bio
            });
        }
    };

    render () {
        return (
            <form className='form' onSubmit={this.onSubmit}>
                { this.state.error && <p className='form__error'>{this.state.error}</p> }
                <input 
                    autoFocus
                    type='text' 
                    className='text-input'
                    placeholder='Name'
                    value={this.state.name}
                    onChange={this.onNameChange}
                />

                <input 
                    type='text' 
                    className='text-input'
                    placeholder='Title'
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />

                <textarea
                    className='textarea'
                    placeholder='Brief bio ...'
                    value={this.state.bio}
                    onChange={this.onBioChange}
                >
                </textarea>
                
                <div>
                    <button className='button'>
                        Save Team Member
                    </button>
                </div>
            </form>
        )
    }

}