import React from 'react';
import { Link } from 'react-router-dom';

//fontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCookieBite, faHome , faContactBook, faHeart} from '@fortawesome/free-solid-svg-icons'


const Nav = () => {
    return (
        <header className='bg-gradient-to-r from-purple-700 to-pink-600 p-3 md:py-4 md:px-6 text-white'>
            <div className='container mx-auto flex flex-col items-center md:justify-between md:flex-row-reverse'>
                <div>
                    <h1 className='font-bold text-2xl cursor-pointer'>PARSA MAHSA</h1>
                </div>
                <div className='mt-4 md:mt-0'>
                    <ul className='flex items-center flex-col md:flex-row md:justify-between'>
                        <li className='py-1 md:py-0 md:px-4 text-lg hover:animate-pulse hover:font-bold'><Link to='/'><FontAwesomeIcon icon={faHome} /> خانه</Link></li>
                        <li className='py-1 md:py-0 md:px-4 text-lg hover:animate-pulse hover:font-bold'><Link to='/cookes'><FontAwesomeIcon icon={faCookieBite} /> لیست آشپزی</Link></li>
                        <li className='py-1 md:py-0 md:px-4 text-lg hover:animate-pulse hover:font-bold'><Link to='/aboutus'><FontAwesomeIcon icon={faContactBook} /> ارتباط باما</Link></li>
                        <li className='py-1 md:py-0 md:px-4 text-lg hover:animate-pulse hover:font-bold'><Link to='/likes'><FontAwesomeIcon icon={faHeart} /> علاقه مندی</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Nav;