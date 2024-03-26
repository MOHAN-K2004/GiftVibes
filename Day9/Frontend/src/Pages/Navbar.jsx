import React from 'react'

import { FaAngleDown } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { IoBagOutline } from "react-icons/io5";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { AiTwotoneHeart } from "react-icons/ai";
const Navbar = () => {
  const navigate=useNavigate();
  const gotofeedback=()=>{
    navigate('/feedbackpage');
  }
  const gotocontactus=()=>{
    navigate('/contactuspage');
  }
  const gotoproduct=()=>{
    navigate('/product');
  }
  const gotouserdetails=()=>{
    navigate('/userdetails');
  }
  const gotoadmingifts=()=>{
    navigate('/admingifts');
  }
  return (
    <div>
         <div class="h-20 justify-between flex w-full bg-white shadow-lg fixed "  >
             <div class="flex">
             <a href="#" class="flex items-center ml-10 text-2xl font-semibold text-gray-900 dark:text-black">
                    <img class="w-14 h-14 mr-2" src="https://res.cloudinary.com/doz5njr9h/image/upload/v1710735031/Gift-logo-design-template-on-transparent-background-PNG_llwcnh.png" alt="logo"/>
                    Gifty  
             </a>
             <div class="flex justify-between w-[500px] mt-8 ml-9">

             <h3 onClick={gotoproduct} class=" cursor-pointer text-blue-800 hover:text-blue-400 group flex">Products <FaAngleDown class="group-hover:rotate-180 duration-500 mt-1 ml-1"/></h3>
             <h3 class=" cursor-pointer text-blue-800 hover:text-blue-400">Pricing</h3>
             <h3 class=" cursor-pointer flex text-blue-800 hover:text-blue-400">Resources <FaAngleDown class=" mt-1 ml-1 group-hover:rotate-180 duration-500 "/></h3>
             <h3 onClick={gotocontactus}class="cursor-pointer text-blue-800 hover:text-blue-400">Contact Us</h3>
             <h3 onClick={gotofeedback} class=" cursor-pointer text-blue-800 hover:text-blue-400"> Feedback</h3>
             </div>
             </div>
             <div class=" flex justify-between mr-20">
              <IoBagOutline class="h-7 mr-[20px] w-7 mt-[25px]"/>
              <AiTwotoneHeart  onClick={gotoadmingifts} class="h-7 cursor-pointer w-7 mt-[25px] mr-[20px] hover:text-blue-800"/>
              <LiaHandHoldingHeartSolid class=" h-7 w-7 mt-[25px] mr-[20px]" />

                <button onClick={gotouserdetails} class="text-blue-900 hover:text-blue-400">
                  <img className='h-[50px] w-[50px]'src="https://i.pinimg.com/736x/a8/57/00/a85700f3c614f6313750b9d8196c08f5.jpg" alt="" />
                </button>
                
                {/* <button class="h-7 w-28 ml-6 mt-6 text-1xl font-normal bg-blue-700 rounded-lg text-white hover:bg-blue-400">Get Started</button>
                <button class="h-7 w-28 ml-6 mt-6 bg-blue-100 rounded-md text-blue-600 hover:bg-green-50">Book a Demo</button> */}


             </div>
        </div>
    </div>
  )
}

export default Navbar