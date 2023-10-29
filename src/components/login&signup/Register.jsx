import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { parentContext } from "../DataProvider";
import swal from "sweetalert";


const Register = () => {
    const nevigate=useNavigate()
    const{emailSignup}=useContext(parentContext)
const[error,setError]=useState("")
    const formHandle=e=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value
        const password=form.password.value
        
        let expression = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(.{6,})$/;

        if(expression.test(password)){
            emailSignup(email,password)
            .then(()=>{
                form.reset()
                swal("congratulation!", "You have signed up Successfully.", "success")
                nevigate("/")
            })
            .catch(()=>setError("Err: Email is Already registered!"))
        }
        else{
            setError("ERR: Password shold be more than 6 cherector,atleast one uppercase & special cherector.")
        }
       
    }
    
  return (
    <div className="flex justify-center items-center">
       
        <div className="card flex-shrink-0 w-full lg:w-96 shadow-2xl bg-base-100">
            <h1 className="text-center text-2xl mt-5 font-bold border-b-2">Register</h1>
          <form onSubmit={formHandle} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <p className="text-red-500 font-bold text-sm">{error}</p>
              <label className="label">
                <p>
                  Have an account? go and{" "}
                  <Link to={"/login"}>
                    <span className="text-red-400 font-bold">login</span>
                  </Link>
                </p>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">register</button>
            </div>
          </form>
        </div>
      
    </div>
  );
};

export default Register;
