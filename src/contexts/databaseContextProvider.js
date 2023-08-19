import React, {createContext} from 'react';

//data
import { dataBase } from '../data/database';

//context create
export const DataBaseContextProvider = createContext(null)

const DatabaseContextProvider = ({children}) => {
    return (
        <div>
            <DataBaseContextProvider.Provider value={dataBase}>
                {children}
            </DataBaseContextProvider.Provider>
        </div>
    );
};

export default DatabaseContextProvider;