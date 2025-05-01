import React, { useState } from 'react'
import app from '../firebase.config'
import { getDatabase, ref, get } from 'firebase/database'

const Account = () => {
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
    <div className="">
        <div className="contain">
            <button onClick={showData} className='py-[10px] px-[15px] bg-[#ddd] rounded-[5px]'>Show Data</button>
            <ul>
                {
                    users.map(( item, i)=>(
                        <li key={i}>{item.username} : {item.usertext}</li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Account