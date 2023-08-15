import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
            <div>
                <h1>PARSA MAHSA</h1>
            </div>
            <div>
                <ul>
                    <li><Link to='/'>خانه</Link></li>
                    <li><Link to='/cookes'>لیست آشپزی</Link></li>
                    <li><Link to='/aboutus'>ارتباط باما</Link></li>
                    <li><Link to='/contactus'>درباره باما</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Nav;