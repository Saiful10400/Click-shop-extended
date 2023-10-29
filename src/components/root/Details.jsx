import { useLoaderData } from "react-router-dom";
import { MdLocalOffer } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { parentContext } from "../DataProvider";
import swal from "sweetalert";

const Details = () => {
  const data = useLoaderData();
  const{user}=useContext(parentContext)
  


  const formHandle=(e)=>{
    e.preventDefault()
    const form=e.target
    const quantity=form.quantity.value
    const userData={...data,email:user.email,quantity}

    fetch("https://assignment-10-mu.vercel.app/add_to_cart",{
      method:"post",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(userData)
    })
    .then(res=>res.json())
    .then(response=>{
      swal("Product Added", "Checkout cart", "success")
    })

  }
  
  return (
    <div>
      <div className="flex lg:px-0 px-4 my-3 lg:flex-row flex-col gap-3 lg:my-20">
        <img className="w-full lg:w-1/3 h-56 lg:h-96 object-contain" src={data.url} alt="" />

        <div className="w-full lg:w-1/3">
          <h1 className="lg:text-4xl text-3xl font-bold">{data.productName}</h1>
          <div className="flex gap-3 mt-2 lg:mt-4">
            <span className="border-2 text-sm px-1 rounded-sm">
              {data.rom}GB
            </span>
            <span className="border-2 text-sm px-1 rounded-sm">
              {data.ram}GB
            </span>
            <span className="border-2 text-sm px-1 rounded-sm">
              {data.productName.includes("5G") ? "5G" : "4G"}
            </span>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-2xl">BDT</span>
            <span className="text-center">
              <span className="text-red-500 text-4xl lg:text-6xl">
                {data.bestdeall=="true" ? new Intl.NumberFormat("en-IN").format(data.price - data.price * 0.15) : new Intl.NumberFormat("en-IN").format(data.price)}
              </span>
              <h1 className="text-sm text-gray-400 font-light -mt-2">
                includes of VAT
              </h1>
            </span>
          </div>
          <p className="text-lg bg-indigo-100 border-l-indigo-600 border-l-4 rounded-lg p-3">
            <span>+{parseInt(Math.random() * 100)}</span> visitors are buying
            this product right now!
          </p>
          <p className="text-lg mt-4 bg-indigo-100 border-l-indigo-600 border-l-4 rounded-lg p-3">
            Split into <span className="font-extrabold">10</span> payments of
            BDT{" "}
            <span className="font-bold">
              {new Intl.NumberFormat("en-IN").format(data.price / 10 + data.price * 0.12)} 
            </span>
            /month (with service charges included) <br />
            <button className="text-indigo-500">{"Read More >"}</button>
          </p>
          <div
            className={`${
              data.bestdeall == "true" ? "" : "hidden"
            } bg-green-100 mt-5 rounded-lg p-2 flex items-center gap-3 pl-4`}
          >
            <span className="text-green-500 text-xl">
              <MdLocalOffer></MdLocalOffer>
            </span>{" "}
            <span>
              save: BDT<span className="font-bold">{new Intl.NumberFormat("en-IN").format(data.price * 0.15)}Tk</span>
            </span>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <p className="text-xl text-gray-400">
            <span className=" font-bold text-gray-500">3 months</span> warranty by Manufacturer <span className="font-bold text-gray-500">{data.brand.toUpperCase()}.</span> Manufacturer No: 
            <span className="text-gray-500 font-bold">{parseInt(Math.random()*100000000)}</span>.
          </p>
          <button className=" my-5 w-full hover:bg-gray-600 transition-all hover:text-white bg-gray-300 text-xl py-2 rounded-lg"><span className="flex items-center justify-center gap-2">View showrooms Availability <AiOutlineDown></AiOutlineDown></span></button>
          <div className="text-center">
          <div className="border border-gray-300"></div>
          <span className="relative bottom-3 text-gray-500 bg-white px-4">or</span>
          </div>
          <form onSubmit={formHandle} className="flex gap-4">
            <input name="quantity" type="number" className="bg-gray-300 w-20 rounded-lg text-xl text-center outline-none hidden py-2" defaultValue="1" />
            <button className="bg-red-600 rounded-lg btn  text-white w-full"><span className="flex justify-center text-2xl gap-3"><BsCart4></BsCart4> Add to cart</span></button>
          </form>
        </div>
      </div>
      <p className="text-center lg:text-xl font-thin">{data.description}</p>
    </div>
  );
};

export default Details;
