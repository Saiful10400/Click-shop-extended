import { useEffect, useState } from "react";
import FlagshipCard from "./FlagshipCard";


const Flagship = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch("https://assignment-10-mu.vercel.app/products/flagship")
        .then(res=>res.json())
        .then(datas=>setData(datas))
    },[])
    return (
        <div>
            <h1 className=" mt-10 mb-6 lg:mb-20 text-center text-gray-500 lg:mt-20 text-xl lg:text-4xl font-bold">Top of the line Flagship</h1>
            <div className="grid grid-cols-2 gap-6 lg:px-0 px-4 lg:grid-cols-5">
                {
                    data.map(item=><FlagshipCard key={item._id} item={item}></FlagshipCard>)
                }
            </div>
        </div>
    );
};

export default Flagship;