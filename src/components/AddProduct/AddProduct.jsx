import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
const AddProduct = () => {
  const navigate=useNavigate()

    const formHandle=e=>{
        e.preventDefault()
        const form=e.target
        const productName=form.productName.value
        const url=form.url.value
        const brand=form.brand.value
        const type=form.type.value
        const price=form.price.value
        const ratings=form.ratings.value
        const description=form.description.value
        const bestdeall=form.bestdeal.value
        const quality=form.quality.value
        const ram=form.ram.value
        const rom=form.rom.value
        const newPhoneData={productName,url,brand,type,price,ratings,description,bestdeall,quality,ram,rom}
        console.log(newPhoneData)
        // data fetch to server.

        fetch("https://assignment-10-mu.vercel.app/send/phone",{
          method:"post",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify(newPhoneData)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            swal("Good job!", "Product has added", "success");
            
            navigate(-1)

          }
        })
    }
  return (
    <>
      <form onSubmit={formHandle} className="flex flex-col gap-4">
        <input required
          name="productName"
          className="w-full text-xl lg:text-2xl pl-2 py-1 border-2 rounded-lg focus:outline-none"
          type="text"
          placeholder="Product name"
        />
        <input required
          name="url"
          className="w-full text-xl lg:text-2xl pl-2 py-1 border-2 rounded-lg focus:outline-none"
          type="text"
          placeholder="Product image url"
        />
        <select
          name="brand"
          className="  select select-bordered w-full text-xl lg:text-2xl pl-2 py-1 border-2 rounded-lg focus:outline-none "
        >
          <option disabled selected>
            Select brand
          </option>
          <option>samsung</option>
          <option>apple</option>
          <option>realme</option>
          <option>oneplus</option>
          <option>google</option>
          <option>nothing</option>
        </select>
        <div className="flex text-xl justify-start items-center gap-6 px-2 lg:gap-10 rounded-lg border-2">
          <h1 className="text-xl lg:text-2xl">Select storage:</h1>

          <div className="flex items-center gap-2" >
            <input required
              name="ram"
              className="lg:w-24 w-16  text-xl lg:text-xl pl-2 py-1 border-2 rounded-lg focus:outline-none"
              type="number"
              placeholder="Ram"
            />
            <span className="lg:inline-block hidden">GB</span>
          </div>

          <div className="flex items-center gap-2">
            <input required
              name="rom"
              className="lg:w-24 w-16  text-xl lg:text-xl pl-2 py-1 border-2 rounded-lg focus:outline-none"
              type="number"
              placeholder="Rom"
            />
            <span className="lg:inline-block hidden">GB</span>
          </div>

        </div>
        <select
          name="type"
          className="select select-bordered w-full text-xl lg:text-2xl pl-2 py-1 border-2 rounded-lg focus:outline-none "
        >
          <option disabled selected>
            Select type
          </option>
          <option>phone</option>
          <option>accessories</option>
          <option>computer</option>
          <option>other</option>
        </select>

        <select
          name="quality"
          className="select select-bordered w-full text-xl lg:text-2xl pl-2 py-1 border-2 rounded-lg focus:outline-none "
        >
          <option disabled selected>
            Select quality
          </option>
          <option>flagship</option>
          <option>midrange</option>
          <option>entryLevel</option>
        </select>

        <div className="flex justify-start items-center text-2xl gap-5 border-2 rounded-lg py-2">
          <h1 className="lg:text-2xl text-xl px-2">Best deal?</h1>
          <div className=" flex items-center gap-2 text-xl">
            <label className="cursor-pointer" htmlFor="bestYes">
              Yes
            </label>
            <input required
              id="bestYes"
              type="radio"
              name="bestdeal"
              defaultValue="true"
              className="radio radio-primary"
            />
          </div>

          <div className=" flex items-center gap-2 text-xl">
            {" "}
            <label className="cursor-pointer" htmlFor="bestNo">
              No
            </label>
            <input required
              id="bestNo"
              type="radio"
              name="bestdeal"
              defaultValue="false"
              className="radio radio-primary"
            />
          </div>
        </div>

        <input required
          name="price"
          className="w-full text-xl lg:text-2xl pl-2 py-1 border-2 rounded-lg focus:outline-none"
          type="number"
          placeholder="Product price"
        />
        <input required
          name="ratings"
          className="w-full text-xl lg:text-2xl pl-2 py-1 border-2 rounded-lg focus:outline-none"
          type="number"
          placeholder="rating, out of 10"
        />
        <textarea required
          name="description"
          className="w-full text-xl lg:text-2xl pl-2 py-1 border-2 rounded-lg "
          placeholder="Shot description about product"
        ></textarea>
        <button type="submit" className="btn btn-primary ">
          Add product
        </button>
      </form>
    </>
  );
};

export default AddProduct;
