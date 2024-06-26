import React from 'react'
import {auth} from "../utils/firebase"
import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom"


const Header = () => {
  const navigate= useNavigate()
  const handleSignOut=()=>{
   
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      navigate("/error")
      // An error happened.
    });
  }
  return (
    <div className='absolute w-full z-10 px-8 py-2 p-2 bg-gradient-to-b from-black flex justify-between'>
       <img className="w-44 px-2 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='N_LOGo'/>
       <div className='flex '>
         <img className="w-12 h-12" src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e" alt="user-icon"/>
<button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
       </div>
    </div>
  )
}

export default Header