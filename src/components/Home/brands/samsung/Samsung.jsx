import { useLoaderData } from "react-router-dom";
import BrandCard from "../BrandCard";
import SamsungSlider from "./SamsungSlider";


const Samsung = () => {
    const data=useLoaderData()
   
    return (
        <>
        <SamsungSlider></SamsungSlider>



        <div className={`${data.length===0?"hidden":"block"}`}>
       <h1 className="text-3xl font-bold lg:text-start text-center my-7">Total Products : {data.length}</h1>
        <div className=" my-10 grid grid-cols-1 md:p-0 px-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            data.map(item=><BrandCard key={item._id} item={item}></BrandCard>)
        }
        </div>
       </div>

        <div className={`${data.length>0?"hidden":"block"} h-[20vh] flex justify-center items-center flex-col`}>
           
            <h1 className='lg:text-5xl text-2xl text-center font-bold text-gray-500'>Product will be added Soon.</h1>
        </div>














        {/* sock for face error. */}
        {/* <h1 className="text-3xl font-bold lg:text-start text-center my-7">Total Products : {data.length}</h1>
        <div className=" my-10 grid grid-cols-1 md:p-0 px-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            data.map(item=><BrandCard key={item._id} item={item}></BrandCard>)
        }
        </div> */}
        </>
    );
};

export default Samsung;