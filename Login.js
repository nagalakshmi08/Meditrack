import React from 'react'
import { FaUser } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Login() {
    const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [data, setData] = useState(
    {
      email: "",
      pwd: "",
    }
  );
  const handleShowPwd = () => {
    setShowPwd(preve => !preve);
  }
  const handleShowConfirmPwd = () => {
    setShowConfirmPwd(preve => !preve);
  }
  const handleOnChange=(e)=>{
    const {name,value}=e.target
    setData((preve)=>{
      return{
        ...preve,
        [name]:value
      }
    })
  }
  const handleSubmit = () =>{
      
  }
  return (
    <div className='p-3 md:p-4 border-solid divide-y-8 items-center flex' >
      <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
        {/* <h1 className='text-center txt-2xl font-bold'>Signup</h1> */}
        <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md text-3xl p-4'>
          <FaUser className='fa-5x w-full' />
        </div>
        <form className='w-full py-3 flex flex-col'>
          
          <label htmlFor='email' className='mb-2'>Email</label>
          <input type={"email"} id='email' name='email' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded' value={data.email} onChange={handleOnChange}/>
          <label htmlFor='pwd' className='mb-2'>Password</label>
          <div className='flex px-2 py-1 mt-1 mb-2 rounded bg-slate-200 focus-within:outline focus-within:outline-black-100'>
            <input type={"password"} id='pwd' name='pwd' className='w-full bg-slate-200 border-none outline-none'/>
            <span className='flex text-xl cursor-pointer' onClick={handleShowPwd}>{showPwd ? <BiShow /> : <BiHide />}</span>
          </div>
          
          <div className='flex mr-4' style={{marginLeft:"90px"}}>
            <button type="submit" onSubmit={handleSubmit} className="max-w-[150px] w-full text-white text-xl rounded-full bg-red-500 hover:bg-red-600 cursor-pointer mt-4 text-medium text-center py-1 mr-4 mb-4">Login</button>
          </div>
          <p className='text-sm'>New User? <Link to={"signup"} className='text-red-400'>Signup</Link></p>
        </form>
      </div>
    </div>
  )
}
