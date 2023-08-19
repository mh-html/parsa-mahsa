import React, { createContext, useReducer } from 'react';

const initialState = {
    likeItem : [
        // { id: 5 },
        // { id: 9 }
    ]
}

const reducerLike = (state, action) => {
    switch (action.type) {
        case "like":
            if (! state.likeItem.find(item => item.id === action.payload.id)) {
                const newLikeItem = { id: action.payload.id };
                return { ...state, likeItem: [...state.likeItem, newLikeItem] };
            } else {
                return { ...state, likeItem: state.likeItem.filter(item => item.id !== action.payload.id) };
            }
        default:
            return state;
    }
}


export const ReducerLikeProvider = createContext(null)

const ReducerData = ({children}) => {

    const [likes, dispatch] = useReducer(reducerLike, initialState)

    return (
        <div>
            <ReducerLikeProvider.Provider value={{likes, dispatch}}>
                {children}
            </ReducerLikeProvider.Provider>
            
        </div>
    );
};

export default ReducerData;