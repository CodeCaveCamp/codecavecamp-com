import React from 'react';
import { Link } from 'react-router-dom';

const BlogTile = () => (
    <Link className='blog-tile tablet-desktop' to={`/`}>
        <div className='blog-tile-header'>
            <img className='blog-tile-image' src='/images/placeholder-blog.png' />
        </div>
        <div className='blog-tile-body'>
            <h3 className='blog-tile-body__title'>Sed Ut Perspiciatis Unde Omnis Iste Natus</h3>
            <p className='blog-tile-body__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad…</p>
        </div>
        <div className='blog-tile-footer'>
            <img className='icon-profile' src='/images/icon-profile-white.png' />
            <div className='blog-tile-footer__details'>
                <p className='blog-tile-author'>Author</p>
                <p className='blog-tile-createdAt'>May 11, 2017</p>
            </div>
        </div>
    </Link>
);

export default BlogTile;