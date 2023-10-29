import { useContext, useEffect, useState } from "react";
import { parentContext } from "../DataProvider";
import CartItem from "./CartItem";

const Cart = () => {
    const[data,setData]=useState([])
    const{user}=useContext(parentContext)
    
    
useEffect(()=>{
    fetch(`https://assignment-10-mu.vercel.app/show_cart_item/${user.email}`)
    .then(res=>res.json())
    .then(data=>setData(data))
},[])

 console.log(data)
    return (
        <div className="min-h-[50vh]">
            <h1 className={`h-[50vh] w-full text-xl lg:text-5xl flex justify-center items-center ${data.length==0? "":"hidden"}`}>NO product Added.</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
           {
            data.map(item=><CartItem key={item._id} item={item}></CartItem>)
           }
        </div>
        </div>
    );
};

export default Cart;