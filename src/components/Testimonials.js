import React from 'react';

const Testimonials = () => (
    <div  className="component-base testimonials">
        <div className='component-base__header'>
            <h1 className='component-base__title'>Don’t Just Take Our Word For It</h1>
            <p className='component-base__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='profile-icons__container'>
            <img className='profile-icon' src='/images/profile-icon.png' />
            <img className='profile-icon active' src='/images/profile-icon.png' />
            <img className='profile-icon' src='/images/profile-icon.png' />
        </div>
        <div className='user-testimony'>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
        </div>
        <div className='star-rating__container'>
            <img className='star active' src='/images/icon-star.png' />
            <img className='star active' src='/images/icon-star.png' />
            <img className='star active' src='/images/icon-star.png' />
            <img className='star active' src='/images/icon-star.png' />
            <img className='star' src='/images/icon-star.png' />
        </div>
        <div className='profile-user-name'>Customer</div>
        <div className='profile-user-title'>Title</div>
    </div>
); 

export default Testimonials;