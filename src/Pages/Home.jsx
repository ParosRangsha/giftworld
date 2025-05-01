import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-[#ddd]">
      <div className="contain w-full h-[100vh] flex justify-center items-center">
        <div className="bg-[#fff] p-[50px] flex gap-3 rounded-[10px]">
            <Link to='/login' className='py-[10px] px-[30px] bg-[#990] text-center text-[#fff] text-[28px] hover:bg-[#bb0] rounded-[5px]'>TK50 Login</Link>
            <Link to='/create' className='py-[10px] px-[30px] bg-[#990] text-center text-[#fff] text-[28px] hover:bg-[#bb0] rounded-[5px]'>TK0 Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Home