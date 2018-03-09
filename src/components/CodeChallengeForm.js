import React from 'react';
import axios from 'axios';

const REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;
const CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;

const url_oauth = 'https://accounts.zoho.com/oauth/v2/token?';
const url_api = 'https://www.zohoapis.com/crm/v2/Leads';

const code_challenge_form = document.getElementById('code-challenge-form');

class CodeChallengeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            error: '',
            invalid_email: ''
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

    resetForm = () => {
        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            error: '',
            invalid_email: ''
        });
    }

    validateForm = () => {
        this.validateInput(document.getElementById('first_name'));
        this.validateInput(document.getElementById('last_name'));
        this.validateInput(document.getElementById('email'));
        
        if (this.state.first_name && this.state.last_name && this.state.email) {
            console.log('all fields are complete');
            this.setState(() => ({ error: '' }));
        } 
        this.validateEmailFormat(document.getElementById('email'));
    };
    
    addError = (field) => {
        this.setState(() => ({ error: 'Oops, looks like you are missing some information.' }));
        field.classList.add('error');
    };
    
    removeError = (field) => {
        field.classList.remove('error');
    };
    
    validateInput = (field) => {
        if (field.value == '') {
            this.addError(field);
        } else {
            this.removeError(field);
        }
    };
    
    validateEmailFormat(email) {
        const validEmail = /@.*?\./.test(email.value);
        if(!validEmail) {
            this.addError(email);
            this.setState(() => ({ invalid_email: 'Provide a valid email.' }));
            return false
        } else {
            this.removeError(email);
            this.setState(() => ({ invalid_email: '' }));
            return true
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.validateForm();

        if(this.state.first_name && this.state.last_name && this.state.email && !this.state.invalid_email) {
            console.log('Form is good to go');
            console.log(this.state.error);
            const leadData = `{
                "data": [
                    {
                        "Company": "Indivdual",
                        "Last_Name": ${this.state.last_name},
                        "First_Name": ${this.state.first_name},
                        "Email": ${this.state.email},
                        "Lead_Source": "Code Challenge"
                    }
                ],
                "trigger": [
                    "approval"
                ]
            }`;
            
            this.getAuthToken()
                .then((response) => {
                    // add Lead to Zoho
                    this.addLead(response.data.access_token, leadData);
                })
                .then(() => {
                    // clear form and add thank you response
                    this.setState(() => ({ 
                        success: 'We are pleased that you have signed up for our Code Challenges. Our Success Team will contact you within the next 24 hours to get your Code Caver notebook sent off to you!' 
                    }));
                    this.resetForm();
                });
        }
    };
    
    getAuthToken = () => {
        return axios({
            method: 'post',
            url: url_oauth,
            responseType: 'json',
            params: {
                refresh_token: REFRESH_TOKEN,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                grant_type: "refresh_token"
            }
        });
    };
    
    addLead = (authToken, newLead) => {
        
        return axios({
            method: 'post',
            url: url_api,
            headers: {
                "Authorization": `Zoho-oauthtoken ${authToken}`
            },
            data: newLead
        })
    };

    render() {
        return (
            <div>
                { this.state.success && <p className='form__sucess'>{this.state.success}</p> }
                { !this.state.success && 
                    <form id='code-challenge-form' className='hero__form' onSubmit={this.onSubmit}>
                        { this.state.error && <div className='form__error'>{this.state.error}</div> }
                        <input 
                            id='first_name'
                            className='text-input' 
                            type='text'
                            placeholder='First Name '
                            value={this.state.first_name}
                            onChange={this.onFirstNameChange}
                        />
                        <input 
                            id='last_name'
                            className='text-input' 
                            type='text'
                            placeholder='Last Name'
                            value={this.state.last_name} 
                            onChange={this.onLastNameChange}
                        />
                        { this.state.invalid_email && <p className='form__error'>{this.state.invalid_email}</p> }
                        <input 
                            id='email'
                            className='text-input' 
                            type='text'
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.onEmailChange} 
                        />
                        <button className='button'>Sign Me Up</button>
                    </form>
                }
            </div>
        )
    }
}

export default CodeChallengeForm;