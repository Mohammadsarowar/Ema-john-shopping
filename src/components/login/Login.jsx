import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authProvider } from "../Context/Context";
const Login = () => {
    const [error,setError]= useState(null)
    const Navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname||'/'
    const {loginWithGoogle} = useContext(authProvider)
    
    const handelWithLogin = (event) =>{
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      if(password.length<6){
          setError('password must be 6 characters or longer')
      }
      loginWithGoogle(email,password)
      .then((result)=>{
        const loginInfo =result.user
        console.log(loginInfo);
        form.reset()
        Navigate(from, {replace:true})
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelWithLogin} className="card-body">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <div className="form-control mt-10">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
      
                  <Link to="/singUp" className="label-text-alt link link-hover">
                  Create New Account?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
              </div>
             
            </form>
            <button className="btn btn-outline btn-secondary">Continue with Google</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
