import { useLoaderData } from "react-router-dom";
import BrandCard from "../BrandCard";
import NothingSlider from './NothingSlider';

const Nothing = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
    <NothingSlider></NothingSlider>
      <h1 className="text-3xl font-bold lg:text-start text-center my-7">
        Total Products : {data.length}
      </h1>
      <div className="grid my-10 grid-cols-1 md:p-0 px-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <BrandCard key={item._id} item={item}></BrandCard>
        ))}
      </div>
    </>
  );
};

export default Nothing;
