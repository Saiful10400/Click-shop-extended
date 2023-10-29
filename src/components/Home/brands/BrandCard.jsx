import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const BrandCard = ({ item }) => {
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
    bestdeall,
    _id
  } = item;

 

  return (
    <div data-aos="fade-up" className="card w-full bg-base-100 shadow-xl">
      <figure className=" w-full h-56 pt-2 relative">
        <img
          className="w-full h-full object-contain"
          src={url}
          alt={productName}
        />
        <span className="bg-yellow-100 absolute bottom-0 left-1 text text flex items-center gap-1 rounded-lg px-2 text-yellow-600">
          {ratings}/10
          <AiTwotoneStar></AiTwotoneStar>
        </span>
        <span className={`absolute font-bold top-2 right-2 bg-red-500 text-white rounded-full w-11 h-11 flex justify-center items-center ${bestdeall=="true"?"":"hidden"}`}>-15%</span>
      </figure>

      <div className="card-body px-4">
        <h2 className="card-title text-3xl lg:text-3xl">{productName}</h2>

        <div className="flex gap-2 lg:gap-4">
          <span className="bg-gray-200  lg:text-base font-medium rounded-sm p-[2px] lg:rounded-lg text-sm  lg:p-1 text-orange-500">
            {brand}
          </span>{" "}
          <span className="bg-gray-200  lg:text-base font-medium rounded-sm p-[2px] lg:rounded-lg text-sm  lg:p-1 text-orange-500">
            {type}
          </span>{" "}
          <span className="bg-gray-200  lg:text-base font-medium rounded-sm p-[2px] lg:rounded-lg text-sm  lg:p-1 text-orange-500">
            {quality}
          </span>
        </div>

        <div
          className={`border-2 w-max text-lg font-normal rounded-lg p-2 ${
            ram == 1 ? "hidden" : "block"
          }`}
        >
          <span>{ram} GB</span>+<span>{rom}GB</span>
        </div>

        <div className="text-xl">
          <span>Price : </span>
          <span className={bestdeall === "true" ? "line-through" : ""}>
            {price}৳
          </span>{" "}
          <span
            className={`bg-red-400 p-2 rounded-lg text-white ${
              bestdeall === "true" ? "" : "hidden"
            }`}
          >
            {parseInt(parseInt(price) - parseInt(price) * 0.15 - 10)}৳
          </span>
        </div>
        <p className=" text-base font-light overflow-hidden">
          {description.slice(1,100)} <span className="">{description.slice(101,105)+"..."}</span>
        </p>

        <div className="card-actions justify-start">
          <Link to={`/details/${_id}`}><button  className="btn btn-success">
            Details
          </button></Link>

         <Link to={`/update/${_id}`}> <button   className="btn btn-warning">
            Update
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
