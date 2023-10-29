import { useLoaderData, useNavigate } from "react-router-dom";
import swal from 'sweetalert'


const Update = () => {
    const oldData=useLoaderData()
    const{productName,_id,url,brand,type,price,ratings,description,quality,ram,rom}=oldData
    const nevigate=useNavigate()
    
    const formHandle=(e)=>{
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
        const id=_id
        const TobeData={id,productName,url,brand,type,price,ratings,description,bestdeall,quality,ram,rom}
        fetch("https://assignment-10-mu.vercel.app/product/update",{
          method:"post",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(TobeData)
        })
        .then(res=>res.json())
        .then(message=>{
          if(message.modifiedCount>0){
            nevigate(-1)
            swal("Good job!", "successfully updated", "success")
          }
          
        })
       

    }
    const deleteHandle=()=>{
      fetch("http://localhost:5000/item/delete",{
        method:"delete",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({id:_id})
      })
      .then(res=>res.json())
      .then(resdata=>{
        if(resdata.deletedCount>0){
          swal("Deleted." , "product is now not any more." ,"success")
          nevigate(-1)
        }
      })
      
    }
   
    return (
        <div>
                  <form onSubmit={formHandle} className="flex flex-col gap-4">
        <input required
          name="productName"
          defaultValue={productName}
          className="w-full text-xl lg:text-2xl pl-2 py-1 border-2 rounded-lg focus:outline-none"
          type="text"
          placeholder="Product name"
        />
        <input required
          name="url"
          defaultValue={url}
          className="w-full text-xl lg:text-2xl pl-2 py-1 border-2 rounded-lg focus:outline-none"
          type="text"
          placeholder="Product image url"
        />
        <select
          name="brand"
          defaultValue={brand}
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
              defaultValue={ram}
              className="lg:w-24 w-16  text-xl lg:text-xl pl-2 py-1 border-2 rounded-lg focus:outline-none"
              type="number"
              placeholder="Ram"
            />
            <span className="lg:inline-block hidden">GB</span>
          </div>

          <div className="flex items-center gap-2">
            <input required
              name="rom"
              defaultValue={rom}
              className="lg:w-24 w-16  text-xl lg:text-xl pl-2 py-1 border-2 rounded-lg focus:outline-none"
              type="number"
              placeholder="Rom"
            />
            <span className="lg:inline-block hidden">GB</span>
          </div>

        </div>
        <select
          name="type"
          defaultValue={type}
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
          defaultValue={quality}
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
              checked
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
          defaultValue={price}
          className="w-full text-xl lg:text-2xl pl-2 py-1 border-2 rounded-lg focus:outline-none"
          type="number"
          placeholder="Product price"
        />
        <input required
          name="ratings"
          defaultValue={ratings}
          className="w-full text-xl lg:text-2xl pl-2 py-1 border-2 rounded-lg focus:outline-none"
          type="number"
          placeholder="rating, out of 10"
        />
        <textarea required
          name="description"
          defaultValue={description}
          className="w-full text-xl lg:text-2xl pl-2 py-1 border-2 rounded-lg "
          placeholder="Shot description about product"
        ></textarea>
        <button type="submit" className="btn btn-primary ">
          Update
        </button>
      </form>
      <button onClick={deleteHandle} className="btn btn-warning mt-3 w-full">Delete</button>
        </div>
    );
};

export default Update;