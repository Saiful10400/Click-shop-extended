import { useEffect, useState } from "react";

 

const CountDown = () => {
    let [sec,setSec]=useState(null)
    let [min,setMin]=useState(59)
    let [hour,setHour]=useState(8)
   
    useEffect(()=>{
        setInterval(() => {
             
            const moonLanding = new Date(Date())
            sec++
            sec==0?setSec(0):setSec(60-moonLanding.getSeconds())
        }, 100);
    // useEffect(()=>{
    //     setInterval(() => {
    //         setSec((previousCoutn)=>previousCoutn--)
    //         if(sec==0){
    //             setSec(59)
    //         }
    //     }, 100);
        
    },[])
    console.log(sec)
    return (
        <div>
            <h1 className="text-3xl">End in <span>{hour}</span> H <span>{min}</span> M <span>{sec}</span> S</h1>
        </div>
    );
};

export default CountDown;