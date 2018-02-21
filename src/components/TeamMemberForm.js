import React from 'react';
import moment from 'moment';

export default class TeamMemberForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.teamMember ? props.teamMember.name : '',
            title: props.teamMember ? props.teamMember.title : '',
            bio: props.teamMember ? props.teamMember.bio : '',
            displayOrder: props.teamMember ? props.teamMember.displayOrder : '',
            status: props.teamMember ? props.teamMember.status : '',
            facebook: props.teamMember ? props.teamMember.facebook : '',
            linkedIn: props.teamMember ? props.teamMember.linkedIn : '',
            twitter: props.teamMember ? props.teamMember.twitter : '',
            dribbble: props.teamMember ? props.teamMember.dribbble : '',
            createdAt: props.teamMember ? moment(props.teamMember.createdAt) : moment(),
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

    onDisplayOrderChange = (e) => {
        const displayOrder = e.target.value;
        this.setState(() => ({ displayOrder }));
    };

    onStatusChange = (e) => {
        const status = e.target.value;
        this.setState(() => ({ status }));
    };

    onDribbbleChange = (e) => {
        const dribbble = e.target.value;
        this.setState(() => ({ dribbble }));
    };

    onFacebookChange = (e) => {
        const facebook = e.target.value;
        this.setState(() => ({ facebook }));
    };

    onLinkedInChange = (e) => {
        const linkedIn = e.target.value;
        this.setState(() => ({ linkedIn }));
    };

    onTwitterChange = (e) => {
        const twitter = e.target.value;
        this.setState(() => ({ twitter }));
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
                displayOrder: parseInt(this.state.displayOrder),
                status: this.state.status,
                bio: this.state.bio,
                dribbble: this.state.dribbble,
                facebook: this.state.facebook,
                linkedIn: this.state.linkedIn,
                twitter: this.state.twitter
            });
        }
    };

    render () {
        const socialMedia=[];

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

                <input
                    type='text'
                    className='text-input'
                    placeholder='Display Order'
                    value={this.state.displayOrder}
                    onChange={this.onDisplayOrderChange}
                />

                <input
                    type='text'
                    className='text-input'
                    placeholder='Status'
                    value={this.state.staus}
                    onChange={this.onStatusChange}
                />

                <textarea
                    className='textarea'
                    placeholder='Brief bio ...'
                    value={this.state.bio}
                    onChange={this.onBioChange}
                >
                </textarea>

                <input
                    type='text'
                    className='text-input'
                    placeholder='LinkedIn link'
                    value={this.state.linkedIn}
                    onChange={this.onLinkedInChange}
                />

                <input
                    type='text'
                    className='text-input'
                    placeholder='Facebook link'
                    value={this.state.facebook}
                    onChange={this.onFacebookChange}
                />

                <input
                    type='text'
                    className='text-input'
                    placeholder='Twitter link'
                    value={this.state.twitter}
                    onChange={this.onTwitterChange}
                />

                <input
                    type='text'
                    className='text-input'
                    placeholder='Dribbble link'
                    value={this.state.dribbble}
                    onChange={this.onDribbbleChange}
                />
                
                <div>
                    <button className='button'>
                        Save Team Member
                    </button>
                </div>
            </form>
        )
    }
}