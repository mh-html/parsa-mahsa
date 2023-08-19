import React , {useContext, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

//funcs
import { showType } from '../funcs/showType';
import { showStar } from '../funcs/showStar';

//context
import { DataBaseContextProvider } from '../contexts/databaseContextProvider';
import { ReducerLikeProvider } from '../contexts/reducerData';

//fontAwsome
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faHeartCirclePlus , faHeartCircleMinus } from '@fortawesome/free-solid-svg-icons'


const DetailsCookes = () => {
    const navigate = useNavigate()
    const {idParams} = useParams()

    const {likes ,  dispatch} = useContext(ReducerLikeProvider)

    const datas = useContext(DataBaseContextProvider)
    const selectCookes = datas[idParams-1]
    const {id, title, image, material, rul, points, raite, type, time} = selectCookes
    

    useEffect(() =>{
        window.scrollTo({ top: 0, left: 0});
    },[])

    return (
        <>
        <div className='container mx-auto p-6'>
            <h1 className="text-3xl font-bold text-purple-700 text-center my-4">پارسا مهسا</h1>
            <div className='flex justify-between items-center flex-col md:flex-row-reverse'>
                <div className='mb-4 md:mb-0 w-80 md:w-1/3 overflow-hidden rounded-md'>
                    <img className='w-full h-full object-cover' src={image} alt='محصول'/>
                </div>
                <div className='px-2 text-justify md:w-2/3  md:px-20 text-purple-700'>
                    <h1 className='text-xl text-pink-600'>نام : <span className='font-bold text-purple-700'>{title}</span></h1>
                    <span>
                    <button onClick={() => dispatch({type: "like", payload: {id}})} className='text-3xl'>{likes.likeItem.some(item => item.id === id) ? 
                        <span className='text-pink-600'><FontAwesomeIcon icon={faHeartCircleMinus} /></span> : 
                        <span className='text-pink-600'><FontAwesomeIcon icon={faHeartCirclePlus} /></span>}
                    </button>
                    </span>
                    <div className='mt-6'>
                        <p className='text-xl text-pink-600'>مواد لازم: </p>
                        <p>{material ? material : "مواد لازم جهت نمایش نیست لطفا به پیج اینستاگرام مراجعه نمایید"}</p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-xl text-pink-600 text-justify'>دستور پخت: </p>
                        <p>{rul? rul : "دستور پخت جهت نمایش نیست لطفا به پیج اینستاگرام مراجعه نمایید"}</p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-xl text-pink-600 text-justify'>نکات: </p>
                        <p>{points ? points : "نکاتی جهت نمایش نیست لطفا به پیج اینستاگرام مراجعه نمایید"}</p>
                    </div>
                </div>
            </div>
                    <div className='mt-6 mr-12 sm:mr-0 flex justify-between items-start sm:items-center flex-col sm:flex-row'>
                        <p className='text-lg text-pink-600'>امتیاز: <span>{showStar(raite)}</span></p>
                        <p className='text-lg text-pink-600'>دسته بندی: <span>{type}</span></p>
                        <p className='text-lg text-pink-600'>زمان: <span></span>{showType(time)}</p>
                    </div>
                    <div className='flex flex-col md:flex-row justify-around items-center'>
                        <button className='mr-12 sm:mr-0 w-52 py-1 my-6 transition duration-300 border-2 border-purple-800 rounded-md bg-purple-700 text-white hover:bg-pink-600 hover:transition-all' onClick={() => navigate("/cookes")}>بازگشت به لسیت غذاها</button>
                        <a href="https://www.instagram.com/parsa_mahsa_/" target="_blank" rel="noreferrer"><button className='mr-12 sm:mr-0 w-52 py-1 my-6 transition duration-300 border-2 border-purple-800 rounded-md bg-purple-700 text-white hover:bg-pink-600 hover:transition-all' >آموزش کامل همراه با فیلم</button></a>
                    </div>
        </div>
        </>
    );
};

export default DetailsCookes;