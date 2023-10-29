import { NavLink } from "react-router-dom";
import gif from "../../public/image/error.gif"

const Error = () => {
    return (
       <div className="w-full h-screen flex lg:flex-row flex-col px-4 lg:px-0 justify-center items-center">
        <img src={gif} alt="" />
         <div>
            
            <h1 className="text-5xl font-normal">Oops! Page Not Found</h1>
            <p className="text-2xl mb-5 my-2">The page you requested could not be found</p>
            <NavLink  to={"/"}><button className="btn btn-primary">Return home</button></NavLink>
        </div>
       </div>
    );
};

export default Error;