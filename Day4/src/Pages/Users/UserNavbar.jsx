import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserNavbar = () => {
    const navigate=useNavigate();
    const gotohomepage=()=>{
        navigate('/homepage');
    }
    const gotorecentorder=()=>{
        navigate('/recentorder');
    }
    const gotouserdetails=()=>{
        navigate('/userdetails');
    }
    const gotologin=()=>{
        navigate('/login');
    }
  return (
    <div class="h-20 w-full shadow-lg">
          <div class="flex justify-between">
            <div className='flex justify-between w-[1000px] ml-[100px] mt-[25px]'>
            <a href="#" class="flex items-center -mb-6 text-2xl font-semibold text-black-900 dark:text-black">
                   <img class="w-[100px] h-[100px] -mt-[40px] mr-2" src="https://res.cloudinary.com/doz5njr9h/image/upload/v1710735031/Gift-logo-design-template-on-transparent-background-PNG_llwcnh.png" alt=""/>
                    <h1 className='-ml-4 -mt-5'>Gifty</h1>  
            </a>
                <p onClick={gotohomepage} className='hover:text-blue-400 cursor-pointer'>Home</p>
                <p  className='hover:text-blue-400 cursor-pointer'>My Orders</p>
                <p  className='hover:text-blue-400 cursor-pointer'>Payment History</p>
                <p  onClick={gotorecentorder} className='hover:text-blue-400 cursor-pointer'>Recent Order</p>
                <p onClick={gotouserdetails} className='hover:text-blue-400 cursor-pointer'>User Details</p>
                <p onClick={gotologin} className='hover:text-blue-400 cursor-pointer'>Logout</p>
            </div>
            <div className='flex justify-between w-[200px]'>
                <img className='w-[50px] h-[50px] mt-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gwj6cw3poAlehKbBs3p_rL3jmUHS-MMYx-7avxRbH0uGS8sQGILwuwFdLkhrT0-UqXY&usqp=CAU" alt="" />
                <p className='mr-[60px] mt-8'>UserName</p>
            </div>
          </div>
    </div>
  )
}

export default UserNavbar