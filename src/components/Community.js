import React from 'react';
import BlogTile from './BlogTile';

const Community = () => (
    <div  className='component-base tablet-desktop'>
        <h1 className='component-base__title'>Code Cave Community</h1>
        <p className='component-base__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className='blog-list'>
            <BlogTile />
            <BlogTile />
            <BlogTile />
        </div>
    </div>
); 

export default Community;