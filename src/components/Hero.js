import React from 'react';
import { connect } from 'react-redux';
import { startAddLead } from '../actions/zoho';

export class Hero extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            error: ''
        };
    }

    onFirstNameChange = (e) => {
        const first_name = e.target.value;
        this.setState(() => ({ first_name }));
    };

    onLastNameChange = (e) => {
        const last_name = e.target.value;
        this.setState(() => ({ last_name }));
    };

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.first_name || !this.state.last_name || !this.state.email) {
            this.setState(() => ({ error: 'All fields are required' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.startAddLead({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
            });
        }
    };

    render() {
        return (
            <div className='component-base hero'>
                <div className='hero__header-container'>
                    <div className='hero__header'>
                        <div className='hero__header-logo tablet-desktop'>
                            <img className='hero__header-logo__image' src='/images/code-cave-camp-logo.svg' />
                        </div>
                        <div className='hero__header-title'>
                            <h1 className='h1'>Ready</h1>
                            <h1 className='h1'>Set</h1>
                            <h1 className='h1'>Code</h1>
                        </div>
                    </div>
                    <div className='hero__message tablet'>
                        <p>Sign up for our code challenges, receive a free Code Cavers notebook, and we will help get you to the starting line.</p>
                    </div>
                    <div className='hero__message hires'>
                        <p>Sign up for our code challenges, receive a free Code Cavers notebook, and we will help get you to the starting line.</p>
                    </div>
                    <div className='hero__message desktop'>
                        <p>Do you have the desire to build, disassemble, question, problem solve and conquer challenges that others can not?</p>
                        <p>Sign up for our code challenges, receive a free Code Cavers notebook, and we will help get you to the starting line.</p>
                    </div>
                </div><div className='hero__form-container'>
                    <div className='hero__message mobile'>
                        <p>Sign up for our code challenges, receive a free Code Cavers notebook, and we will help get you to the starting line.</p>
                    </div>
                    <form className='hero__form' onSubmit={this.onSubmit}>
                        { this.state.error && <p className='form__error'>{this.state.error}</p> }
                        <input 
                            className='text-input' 
                            type="text" 
                            placeholder="First Name" 
                            value={this.state.first_name}
                            onChange={this.onFirstNameChange}
                        />
                        <input 
                            className='text-input' 
                            type="text" 
                            placeholder="Last Name" 
                            value={this.state.last_name} 
                            onChange={this.onLastNameChange}
                        />
                        <input 
                            className='text-input' 
                            type="text" 
                            placeholder="Email" 
                            value={this.state.email}
                            onChange={this.onEmailChange} 
                        />
                        <button className='button'>Sign Me Up</button>
                    </form>
                    
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddLead: (newLead) => dispatch(startAddLead(newLead))
});

export default connect(undefined,mapDispatchToProps)(Hero);