import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-gradient-to-r from-purple-700 to-pink-600 py-4 px-6 text text-white'>
            <div className='container mx-auto flex justify-between items-center flex-col md:flex-row-reverse'>
                <p> حق کپی رایت &copy;</p>
                <div className='text-center my-8 md:my-0'>
                    <p className='font-bold border-b py-2'>شبکه های اجتماعی</p>
                    <ul className='flex items-center justify-between'>
                        <li className='px-4 text-lg hover:animate-pulse hover:font-bold'><a href='#'>telegram</a></li>
                        <li className='px-4 text-lg hover:animate-pulse hover:font-bold'><a href='#'>whatsApp</a></li>
                        <li className='px-4 text-lg hover:animate-pulse hover:font-bold'> <a href="https://www.instagram.com/parsa_mahsa_/" target="_blank" rel="noreferrer">instagram</a></li>
                    </ul>
                </div>
                <p>شما لایق بهترین‌ها هستید</p>
            </div>
        </footer>
    );
};

export default Footer;