import React from 'react';

const AboutUs = () => {
    return (
        <div className='container mx-auto p-6 min-h-screen'>
            <h1 className='text-center text-purple-600 text-lg md:text-2xl font-bold'>آموزش آشپزی/کیک/شیرینی/دسر</h1>
            <p className='text-md  md:text-xl mt-4 leading-8'>
                من الهامم ‌مامان دوقلوها پارساومهسا👩‍👧‍👦 <br />
                اینجا دنیای خوشمزه هاست😋<br />
                ساده وراحت ولی دقیق واصولی آموزش میدم👩‍🍳<br />
                حتما استوری هارو دنبال کن کلی باهم میخندیم🤣<br />
            </p>
            <h5 className='text-lg md:text-xl mt-16 text-pink-600'>این پیج اینستاگرام منه خوشحال میشم از پیجم دیدن کنی و منو فالو کنی</h5>
            <a href="https://www.instagram.com/parsa_mahsa_/" target="_blank" rel="noreferrer"><button className="mt-4 border-2 border-pink-600 rounded-md py-1 px-8 bg-pink-600 border-white text-white mr-4 hover:text-pink-600 hover:bg-white">پیج اینستاگرام</button></a>
        </div>
    );
};

export default AboutUs;