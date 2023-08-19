import React, {useContext , useState} from "react";

//components
import CookesShow from "../components/cookesShow";

//context
import { DataBaseContextProvider } from "../contexts/databaseContextProvider";

//images
import headerImage from '../data/images/shared/heaer-wome.jpeg'
import pizzaImage from '../data/images/shared/lazania.jpg'
import chefImage from '../data/images/shared/femalechef.avif'


//style 
const liStyle = "border-2 border-white rounded-md py-1 w-36 text-center mb-3 md:mb-0 hover:border-pink-600 hover:text-pink-600"
const liStyleHover = "border-2 border-white rounded-sm bg-pink-600 py-1 w-36 mb-3 md:mb-0 text-center"

const Home = () => {

  const datas = useContext(DataBaseContextProvider)
  const [currentType, setCurrentType] = useState("top")
  const linkParsaMahsa = "https://www.instagram.com/parsa_mahsa_/"

  return (
    <React.Fragment>
      <section className="container mx-auto text-center mt-10 md:mt-20 flex flex-col md:flex-row md:justify-around items-center">
        <div>
          <h1 className="text-3xl mb-5">وبسایت رسمی <span className="text-purple-700 font-semibold"> پارسامهسا </span></h1>
          <p className="text-xl font-medium">
            آموزش شیرینی پزی و غذاهای لذیذ و خوشمزه برای شما<br /> که لایق بهترین‌ها
            هستید ... <br /> بصورت کاملا <span className="text-pink-600">رایگان</span>
          </p>
          <div className="mt-14 ">
            <a href={linkParsaMahsa} target="_blank" rel="noreferrer"><button className="border-2 rounded-md py-1 px-6 border-purple-700 text-purple-700 hover:text-white hover:bg-purple-700">سفارش</button></a>
            <a href={linkParsaMahsa} target="_blank" rel="noreferrer"><button className="border-2 rounded-md py-1 px-6 border-purple-700 text-white bg-purple-700 mr-4 hover:text-purple-700 hover:bg-white">آموزش</button></a>
          </div>
        </div>
        <div className="w-96 overflow-hidden rounded-2xl">
          <img src={headerImage} alt="headerImage" className="w-full h-full object-cover"/>
        </div>
      </section>

      <section>
        <div className="bg-purple-700 text-white p-4">
          <ul className="container mx-auto flex justify-between items-center flex-col md:flex-row">
            <li className={currentType === 'top' ? liStyleHover : liStyle}>
              <button onClick={() => setCurrentType("top")}>تاپ ترین ها</button>
            </li>
            <li className={currentType === 'new' ? liStyleHover : liStyle}>
              <button onClick={() => setCurrentType("new")}>جدید ترین ها</button>
            </li>
            <li className={currentType === 'old' ? liStyleHover : liStyle}>
              <button onClick={() => setCurrentType("old")}>قدیمی ترین ها</button>
            </li>
          </ul>
        </div>
        <div className="container mx-auto px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {
          datas.map(data => data.time === currentType && <CookesShow key={data.id} data={data} />)
        }
        </div>

      </section>

      <section className="bg-pink-600 mt-8">
        <div className="container mx-auto flex justify-around flex-col items-center md:flex-row-reverse p-4">
          <div className="w-56 md:w-96 overflow-hidden rounded-2xl">
            <img className="w-full h-full object-cover" src={pizzaImage} alt="پیتزا" />
          </div>
          <div className="text-white mt-10">
            <h3 className="text-xl md:text-3xl font-bold mb-8">پیشنهاد ویژه</h3>
            <p className="text-lg md:text-2xl leading-10">
              لازانیای پارسا مهسا  <br />یه لازانیای باحال به همراه سس جیلی و ادویه مخصوص
            </p>
            <a href={linkParsaMahsa} target="_blank" rel="noreferrer"><button className="mt-20 border-2 rounded-md py-1 px-8 bg-pink-600 border-white text-white mr-4 hover:text-pink-600 hover:bg-white">دستور پخت &larr;</button></a>
        </div>
        </div>
      </section>

      <section className="container mx-auto flex justify-between items-center flex-col md:flex-row-reverse p-8 flex-1">
        <div className="w-56 md:w-96 overflow-hidden">
          <img src={chefImage} alt="اشپز" />
        </div>
        <div className="text-md md:text-xl text-purple-700 font-bold">
              <p className="leading-6 md:leading-8">طعم های جدید و لذیذ</p>
              <p className="leading-6 md:leading-8">پخت آسان</p>
              <p className="mb-10 leading-6 md:leading-8">
                توانایی استفاده از آتش و یخ برای پخت و ذخیره ی غذا<br />به انسان کمک کرد تا
                به تکنولوژی ها و نوآوری های جدید پی ببرد.
              </p>
              <h5 className="text-pink-600">مامان الهام هستم</h5>
              <p>به وبسایتم سر بزن و پیجمو فالو کن تا کلی غذای خوشمزه باهم درست کنیم</p>
              <p>من اینجام تا کلی مهارت و تکنیک یادت بدم</p>
        </div>
      </section>

    </React.Fragment>
  );
};

export default Home;
