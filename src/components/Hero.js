import React from 'react';

const Hero = () => (
    <div className='hero'>
        <div className='content-container'>
            <div className='hero__container'>
                <div className='hero__message'>
                    <div className='hero__message__header'>
                        <img src='/images/code-cave-camp-logo.svg' />
                        <div className='hero__message__header__callout'>
                            <h1>Ready</h1>
                            <h1>Set</h1>
                            <h1>Code</h1>
                        </div>
                    </div>
                    <div className='hero__message__body'>
                        <p>Do you have the desire to build, disassemble, question, problem solve and conquer challenges that others cannot?</p>
                        <p>Sign up for our challenge, receive a free Code Cavers notebook, and we will help get you to the starting line.</p>
                    </div>
                </div>

                <form className='hero__form'>
                    <div className='hero__form__inputs'>
                        <input className='text-input' type="text" placeholder="Name" />
                        <input className='text-input' type="text" placeholder="Email" />
                        <input className='text-input' type="text" placeholder="Set a Password" />
                        <button className='button'>Sign Me Up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
); 

export default Hero;