import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext } from "react";
import { parentContext } from "../DataProvider";

const Root = () => {
  const{dark}=useContext(parentContext)
  return (
    <div className={dark?"bg-gray-900 text-white":"bg-white"}>
      <div className="sticky top-0 left-0 z-10">
      <Navbar></Navbar>
      </div>

      <div className="lg:w-[1400px] mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
