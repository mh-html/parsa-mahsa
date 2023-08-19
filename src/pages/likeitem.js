import React, { useContext } from 'react';

//components
import CookesShow from '../components/cookesShow';

//context 
import { ReducerLikeProvider } from '../contexts/reducerData';
import { DataBaseContextProvider } from '../contexts/databaseContextProvider';


const LikeItem = () => {
    
    const {likes} = useContext(ReducerLikeProvider)
    const datas = useContext(DataBaseContextProvider)

    return (
        <div className='container mx-auto min-h-screen'>
            {
                likes.likeItem.length === 0 ? <p className='text-2xl text-purple-700 font-bold text-center'>لیست علاقه مندی خالی میباشد</p> :
                <div className="my-10 grid gap-4 px-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-36">
                    {datas.map(data => {
                        if(likes.likeItem?.some(i => i.id === data.id))
                            return <CookesShow key={data.id} data={data} />
                        else
                            return ""
                    })}
                </div>
            }
        </div>
    );
};

export default LikeItem;