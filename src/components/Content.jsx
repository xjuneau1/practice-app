import React from 'react';
import './Content.css'


function Content() {
    return (
        <div className='content-container'>
            <div className='text-container'>
                <p>Hello World</p>
                <p>Goodbye World</p>
            </div>
            <img src='../images/profile.jpg' alt=''/>
        </div>
    );
}

export default Content;