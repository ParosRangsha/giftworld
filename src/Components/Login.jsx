import React, { useState } from 'react'
import app from '../firebase.config'
import { getDatabase, ref, get } from 'firebase/database'

const Login = () => {
    let [users, setUsers] = useState([])

    let showData = async ()=>{
        let db = getDatabase(app)
        let dbref = ref(db , 'user/')
        let snapshoot = await get(dbref)
        if(snapshoot.exists){
            setUsers(Object.values(snapshoot.val()))
        }else{
            alert('Error code')
        }
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-md w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create a new account</h2>
        <p className="text-center text-sm text-gray-600 mb-6">It’s quick and easy.</p>

        <div className="space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="w-1/2 px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              className="w-1/2 px-4 py-2 border rounded-md"
            />
          </div>
          <input
            type="text"
            name="email"
            placeholder="Mobile number or email address"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="New password"
            className="w-full px-4 py-2 border rounded-md"
          />

          <div>
            <label className="block text-sm mb-1 text-gray-700">Date of birth</label>
            <div className="flex gap-2">
              <select
                name="birthDay"
                className="w-1/3 px-2 py-2 border rounded-md"
              >
                <option>Day</option>
                {[...Array(31)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select
                name="birthMonth"
                className="w-1/3 px-2 py-2 border rounded-md"
              >
                <option>Month</option>
                {[
                  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                ].map((month, i) => (
                  <option key={i} value={month}>{month}</option>
                ))}
              </select>
              <select
                name="birthYear"
                className="w-1/3 px-2 py-2 border rounded-md"
              >
                <option>Year</option>
                {Array.from({ length: 100 }, (_, i) => 2025 - i).map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">Gender</label>
            <div className="flex gap-4">
              {["Female", "Male", "Custom"].map((g) => (
                <label key={g} className="flex items-center gap-2 border px-3 py-2 rounded-md">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          <p className="text-xs text-gray-600">
            By clicking Sign Up, you agree to our <a href="#" className="text-blue-600">Terms</a>, <a href="#" className="text-blue-600">Privacy Policy</a> and <a href="#" className="text-blue-600">Cookies Policy</a>.
          </p>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-green-700"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login