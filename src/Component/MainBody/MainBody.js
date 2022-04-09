import React from 'react';
import { Link } from 'react-router-dom';
 import './MainBody.css'

const MainBody = () => {
    return (
        <div>
            <nav className='menu'>
               <Link to='/signUp' >Sign UP</Link> 
               <Link to='/logIn' >Log In</Link> 
            </nav>
        </div>
    );
};

export default MainBody;