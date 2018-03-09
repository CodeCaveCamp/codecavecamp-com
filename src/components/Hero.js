import React from 'react';
import CodeChallengeForm from './CodeChallengeForm';

const Hero = () => (
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
            <CodeChallengeForm />
        </div>
    </div>
)

export default Hero;