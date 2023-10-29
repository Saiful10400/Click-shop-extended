import { useEffect, useState } from "react";
import BesetDealsCard from "./BesetDealsCard";
import CountDown from "./CountDown";

const BestDeals = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-mu.vercel.app/products/best_deals")
      .then((res) => res.json())
      .then((datas) => setData(datas));
  }, []);

  const priceHandle = () => {
    const priceSorted = [...data];
    priceSorted.sort((a, b) => {
      const number1 = parseInt(a.price);
      const number2 = parseInt(b.price);

      if (number1 > number2) {
        return 1;
      } else if (number2 > number1) {
        return -1;
      }
    });
    setData(priceSorted);
    console.log(priceSorted);
  };
  const reviweHandle = () => {
    const priceSorted = [...data];
    priceSorted.sort((a, b) => {
      const number1 = parseInt(a.ratings);
      const number2 = parseInt(b.ratings);

      if (number1 > number2) {
        return 1;
      } else if (number2 > number1) {
        return -1;
      }
    });
    setData(priceSorted);
    console.log(priceSorted);
  };

  return (
    <div className="mb-5">
      <div className="flex justify-between  items-center">
        <h1 className=" mt-10 mb-6 lg:mb-20 text-center text-gray-500 lg:mt-20 text-xl lg:text-4xl font-bold">
          Best Deals
        </h1>
       
        <div className="flex gap-4 lg:flex-row flex-col items-center justify-center">
          <span className="text-xl font-bold">sort by:</span>
          <div>
            <button
              onClick={priceHandle}
              className="btn bg-orange-500 btn-sm text-white"
            >
              price
            </button>
            <button
              onClick={reviweHandle}
              className="btn bg-orange-500 btn-sm text-white"
            >
              Review
            </button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 lg:px-0 px-4 gap-5 lg:gap-10">
        {data.map((item) => (
          <BesetDealsCard key={item._id} item={item}></BesetDealsCard>
        ))}
      </div>
    </div>
  );
};

export default BestDeals;
