import { useContext } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { parentContext } from "../DataProvider";

const FlagshipCard = ({ item }) => {
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
    rom,
    _id,
    bestdeall,
  } = item;
  const{dark}=useContext(parentContext)
  return (
   <Link to={`details/${_id}`}>
    <div data-aos="fade-up" className={`card w-full  shadow-xl ${dark? "text-white bg-gray-700 shadow-stone-800" : "bg-base-100"}`}>
      <figure className=" w-full h-36 lg:h-56 pt-2 relative">
        <img
          className="w-full h-full object-contain"
          src={url}
          alt={productName}
        />
        <span className="bg-yellow-100 absolute bottom-0 text-sm left-1 flex items-center gap-1 rounded-lg px-2 text-yellow-600">
          {ratings}/10
          <AiTwotoneStar></AiTwotoneStar>
        </span>
      </figure>

      <div className="card-body p-0 px-1 pb-4 border-t-2 mt-3 text-start">
        <h2 className="card-title text-base lg:text-xl  h-10 mt-2">{productName}</h2>

        <div
          className={` w-max border-2 text-sm lg:text-xl font-sans font-light rounded-lg p-2 ${
            ram == 1 ? "hidden" : "block"
          }`}
        >
          <span>{ram} GB</span>+<span>{new Intl.NumberFormat("en-IN").format(rom)}GB</span>
        </div>

        <div className="text-sm lg:text-lg">
          <span>Price: <span></span> </span>
          <span className={bestdeall === "true" ? "line-through" : ""}>
            {new Intl.NumberFormat("en-IN").format(price)}৳
          </span>{" "}
          <span
            className={`bg-red-400 p-1 lg:p-2 rounded-md lg:rounded-lg text-white ${
              bestdeall === "true" ? "" : "hidden"
            }`}
          >
            {new Intl.NumberFormat("en-IN").format(parseInt(parseInt(price) - parseInt(price) * 0.15 - 10))}৳
          </span>
        </div>
      </div>
    </div>
   </Link>
  );
};

export default FlagshipCard;
