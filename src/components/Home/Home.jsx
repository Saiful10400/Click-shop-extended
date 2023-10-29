import Slider from "./Slider";

// brands logo.
import samsung from "../../../public/image/brand log/samsung.png";
import apple from "../../../public/image/brand log/apple.png";
import realme from "../../../public/image/brand log/realme.png";
import oneplus from "../../../public/image/brand log/oneplus.png";
import google from "../../../public/image/brand log/google.png";
import nothing from "../../../public/image/brand log/nothing.png";
import { Link } from "react-router-dom";
import BestDeals from "./BestDeals";
import Flagship from "./Flagship";
import { useContext } from "react";
import { parentContext } from "../DataProvider";

const Home = () => {
  const {dark}=useContext(parentContext)
  return (
    <div>
      <Slider></Slider>
      <h1 className=" mt-10 mb-6 lg:mb-20 text-center text-gray-500 lg:mt-20 text-xl lg:text-4xl font-bold">
        shop by brand
      </h1>

      <div className="grid mx-2 lg:mx-0  gap-5 lg:gap-3 grid-cols-2 lg:grid-cols-6">
        <Link to={"/brands/samsung"}>
          <div className={`shadow-xl hover:scale-110 transition-all lg:h-[200px] h-[100px] lg:w-[200px]   rounded-full p-2 flex justify-center items-center ${dark? "bg-gray-500 shadow-slate-700 " :"bg-white "}`}>
            <img className="w-full h-20 object-contain" src={samsung} alt="" />
          </div>
        </Link>

        <Link to={"/brands/apple"}>
          <div className={`shadow-xl hover:scale-110 transition-all lg:h-[200px] h-[100px] lg:w-[200px]   rounded-full p-2 flex justify-center items-center ${dark? "bg-gray-500 shadow-slate-700 " :"bg-white "}`}>
            <img className="w-full h-20 object-contain" src={apple} alt="" />
          </div>
        </Link>
        <Link to={"/brands/realme"}>
          <div className={`shadow-xl hover:scale-110 transition-all lg:h-[200px] h-[100px] lg:w-[200px]   rounded-full p-2 flex justify-center items-center ${dark? "bg-gray-500 shadow-slate-700 " :"bg-white "}`}>
            <img className="w-full h-8 object-contain" src="https://event.realme.com/static/img/824f086.svg" alt="" />
          </div>
        </Link>
        <Link to={"/brands/oneplus"}>
          <div className={`shadow-xl hover:scale-110 transition-all lg:h-[200px] h-[100px] lg:w-[200px]   rounded-full p-2 flex justify-center items-center ${dark? "bg-gray-500 shadow-slate-700 " :"bg-white "}`}>
            <img className="w-full h-32 object-contain" src={oneplus} alt="" />
          </div>
        </Link>
        <Link to={"/brands/google"}>
          <div className={`shadow-xl hover:scale-110 transition-all lg:h-[200px] h-[100px] lg:w-[200px]   rounded-full p-2 flex justify-center items-center ${dark? "bg-gray-500 shadow-slate-700 " :"bg-white "}`}>
            <img className="w-full h-32 object-contain" src={google} alt="" />
          </div>
        </Link>
        <Link to={"/brands/nothing"}>
          <div className={`shadow-xl hover:scale-110 transition-all lg:h-[200px] h-[100px] lg:w-[200px]   rounded-full p-2 flex justify-center items-center ${dark? "bg-gray-500 shadow-slate-700 " :"bg-white "}`}>
            <img className="w-full h-6 object-contain" src={nothing} alt="" />
          </div>
        </Link>
      </div>
      <Flagship></Flagship>
      <BestDeals></BestDeals>
    </div>
  );
};

export default Home;
