import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdLocalOffer } from "react-icons/md";
import { useContext } from "react";
import { parentContext } from "../DataProvider";
const BesetDealsCard = ({ item }) => {
  const {
    productName,
    url,
    price,
    brand,
    type,
    ratings,
    description,
    quality,
    ram,
    _id,
    rom,
  } = item;

  const{dark}=useContext(parentContext)
  return (
    <Link to={`/details/${_id}`}><div data-aos="fade-up" className={`card w-full  shadow-xl ${dark? "bg-gray-700 shadow-slate-700" :"bg-base-100 "}`}>
    <figure className=" w-full h-36 lg:h-56 pt-2 relative ">
      <img
        className="w-full h-full object-contain"
        src={url}
        alt={productName}
      />
      <span className="bg-yellow-100 absolute bottom-0 left-1 text text flex items-center gap-1 rounded-lg px-2 text-yellow-600">
        {ratings}/10
        <AiTwotoneStar></AiTwotoneStar>
      </span>
    </figure>

    <div className="card-body p-0 px-1 pb-4 border-t-2 mt-3 text-start">
      <h2 className="card-title text-base lg:text-xl  h-10 mt-2">{productName}</h2>




      <div
        className={` w-max border-2 font-sans font-light rounded-lg p-1 lg:p-2 ${
          ram == 1 ? "hidden" : "block"
        }`}
      >
        <span>{ram} GB</span>+<span>{rom}GB</span>
      </div>


      <div className={`${ram==1 && rom==1 ? "flex" : "hidden"} gap-1 lg:gap-2 lg:text-base text-sm`}>
      <div
        className={` w-max border-2 font-sans font-light rounded-lg p-1 lg:p-2`}
      >
        <span>{brand.toUpperCase()}</span>
      </div>
      <div
        className={` w-max border-2 font-sans font-light rounded-lg p-2 `}
      >
        <span>{quality.toUpperCase()}</span>
      </div>
      </div>



      <div className="text-sm lg:text-lg">
        <span>Price: </span>
        <span className="line-through">{new Intl.NumberFormat("en-IN").format(price)}৳</span>{" "}
        <span className="bg-red-400 p-1 lg:p-2 rounded-md lg:rounded-lg text-white">
          {new Intl.NumberFormat("en-IN").format(parseInt(parseInt(price) - parseInt(price) * 0.15 - 10))}৳
        </span>
      </div>

      <div className="bg-green-400 text-gray-600 rounded-md flex items-center justify-center gap-3"><MdLocalOffer></MdLocalOffer><span>save: {new Intl.NumberFormat("en-IN").format(price*0.15)}৳</span></div>

     
    </div>
  </div></Link>
  );
};

export default BesetDealsCard;
