import { useContext , useState } from "react";

import { DataBaseContextProvider } from "../contexts/databaseContextProvider";

import CookesShow from "../components/cookesShow";

const Cookes = () => {

    const datas = useContext(DataBaseContextProvider)
    const [dataFilter , setDataFilter] = useState([...datas])
    
    const searchFunction = (e) => {
        setDataFilter(datas.filter(item => item.title.includes(e.target.value)))
    }

    return (
        <div className="container mx-auto min-h-screen text-center my-4">
            <h1 className="text-3xl font-bold text-purple-700">پارسا مهسا</h1>
           <h2 className="text-xl font-semibold text-purple-500 mb-6">لیست غذاهای خوشمزه و لذیذ</h2>
           <input type="text" placeholder="جستجو ..."
            className="mb-8 w-72 md:w-96 rounded-md outline-none border-0 py-1.5 pl-7 pr-20 text-pink-600 ring-1 ring-inset  ring-purple-700 placeholder:text-purple-700 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
            onChange={(e) => searchFunction(e)}
           />
           <div className="grid gap-4 px-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-36">
            {
                dataFilter.map(data => 
                    <CookesShow key={data.id} data={data} />
                    )
            }
           </div>
        </div>
    );
};

export default Cookes;