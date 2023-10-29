import swal from "sweetalert";


const CartItem = ({item}) => {

    const deleteHandle=()=>{
        fetch("https://assignment-10-mu.vercel.app/card/delete",{
            method:"delete",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(item)
        })
        .then(req=>req.json())
        .then(data=>{
            location.reload()
        })
    }
    
    return (
        <div className=" border-2 flex gap-2 w-full">
            
            <img className="w-24 h-24 object-contain" src={item.url} alt="" />
            <div>
                <h1 className="text-xl font-bold">{item.productName}</h1>
                <div className={`${item.ram==1?"hidden":""} flex gap-2 border-2  `}><span>{item.ram}GB</span><span>{item.rom}GB</span></div>
                <div className="font-extrabold text-green-400">Price: {item.bestdeall=="true"? new Intl.NumberFormat("en-IN").format(parseInt(item.price-item.price*0.15)):new Intl.NumberFormat("en-IN").format(item.price)} tk</div>
            </div>
            <div className=" flex lg:flex-row flex-col gap-4 justify-center items-center lg:gap-5">
                <button onClick={()=>swal("Successfully your order Placed.", "You will notify soon", "success")} className="btn lg:btn-md btn-sm btn-primary">Checkout</button>
                <button onClick={deleteHandle} className="btn lg:btn-md btn-sm btn-warning">delete</button>
            </div>
        </div>
    );
};

export default CartItem;