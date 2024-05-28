import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm,setIsSignInForm]= useState(true);

  const toggleSignInForm=()=>{
setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="log"
        />
      </div>
      <form className=" w-3/12 p-12 absolute rounded-lg bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{ isSignInForm?"Sign In": "Sign Up"}</h1>
        {
          !isSignInForm &&  <input
          type="text"
          placeholder="Full Name"
          className="rounded-lg p-4 my-4 w-full bg-gray-700"
        />
        }
        <input
          type="email"
          placeholder="Email address"
          className=" rounded-lg p-4 my-4 w-full bg-gray-700"
        />
       
        <input
          type="password"
          placeholder="Password"
          className="rounded-lg p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-3 my-6 rounded-lg bg-red-700 w-full">
        { isSignInForm?"Sign In": "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{ isSignInForm?"New to Netflix? Sing Up Now": "Already registred? Sign In Now."}</p>
      </form>
    </div>
  );
};

export default Login;
