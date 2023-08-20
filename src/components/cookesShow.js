import React, { useContext} from 'react';
import { Link } from 'react-router-dom';

//fontAwsome
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faHeartCirclePlus , faHeartCircleMinus } from '@fortawesome/free-solid-svg-icons'

//funcs
import { showStar } from '../funcs/showStar';

//context
import { ReducerLikeProvider } from '../contexts/reducerData';


const CookesShow = (props) => {
    const {id, title, image, raite, type} = props.data;
    const {likes ,  dispatch} = useContext(ReducerLikeProvider)

    return (
        <div className='py-2 border-2 border-purple-800 rounded-lg text-center group hover:shadow-lg hover:border-pink-600'>
            <div className='w-44 h-44 md:w-52 md:h-52 mx-auto overflow-hidden mb-2 rounded-full border-4 border-purple-900 group-hover:border-pink-600 group-hover:shadow-xl'>
                <img className='w-full h-full object-cover group-hover:scale-125 duration-500 transition-all' src={image} alt={title}/>
            </div>
            <div>
                <div className='flex justify-evenly items-center'>
                    <h6 className='font-semibold text-purple-700 text-sm'> دسته بندی : <span>{type}</span></h6>
                    <h6 className='font-semibold text-purple-800 text-sm'>{showStar(raite)}</h6>
                </div>
                <h2 className='font-bold text-pink-600 text-xl my-2 '>{title}</h2>
                <div className='flex justify-evenly items-center'>
                    <Link  key={id} to={`/cookes/${id}`}>
                        <button className='px-6 py-1 transition duration-300 border-2 border-purple-800 rounded-md bg-purple-700 text-white hover:bg-pink-600 hover:transition-all'>دستور پخت و نکات</button>
                    </Link>
                        <button onClick={() => dispatch({type: "like", payload: {id}})} className='text-3xl'>{likes.likeItem.some(item => item.id === id) ? 
                            <span className='text-purple-600'><FontAwesomeIcon icon={faHeartCircleMinus} /></span> : 
                            <span className='text-pink-600'><FontAwesomeIcon icon={faHeartCirclePlus} /></span>}
                        </button>
                </div>
            </div>
        </div>
    );
};

export default CookesShow;