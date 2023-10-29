import { useContext } from "react";
import { parentContext } from "../DataProvider";
import { Navigate } from "react-router-dom";
import Login from "../login&signup/Login";


const Private = ({children}) => {
    
    const{user}=useContext(parentContext)
   if(user){
    return children
   }
   else{
    return (
        <div>
            <h1 className=" text-xl font-bold my-6 text-red-300 lg:text-5xl text-center"> <span className="text-red-700">Warn:</span> Login Required for further actions.</h1>
        <Login></Login>
        </div>
    )
   }
};

export default Private;