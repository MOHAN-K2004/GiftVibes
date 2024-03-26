import React from 'react'

import AdminNavbar from '../Admin/AdminNavbar'
import Adminsidebar from './Adminsidebar'

const AdminGifts = () => {
  return (
    <div>
       <AdminNavbar/>
       <Adminsidebar/>
        <div className="">
          <div className=" ml-[350px] mr-[100px] pt-[100px] cursor-pointer flex ">
            <div className="w-[300px] cursor-pointer h-[300px] rounded-lg  border border-black">
              <img
                className="ml-7 h-44 w-44"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXvGl1GM9KHH1wLoetB-RphBOssGY_e2-K92kIqGdGw&s"
                alt=""
              />
              <p  className="ml-[90px] mt-7">Birthday Gifts</p>
              <p className="text-blue-400 ml-[100px]">view more </p>
            </div>
            <div   className="w-[300px] ml-8 h-[300px] rounded-lg  border border-black">
              <img
                className="ml-10 h-44 mt-6  w-44"
                src="https://m.media-amazon.com/images/I/61VRL+cF3EL._AC_UF1000,1000_QL80_.jpg"
                alt=""
              />
              <p className="ml-[60px] mt-7">Wedding Aniversary Gifts</p>
              <p className="text-blue-400 ml-[110px]">view more </p>
            </div>
            <div className="w-[300px] ml-8 h-[300px] rounded-lg  border border-black">
              <img
                className="ml-10 h-44 mt-6  w-44"
                src="https://files.printo.in/site/20230717_162517753148_eba8f6_Personalized-Photo-Frames.jpg"
                alt=""
              />
              <p className="ml-[125px] mt-7">Frames</p>
              <p className="text-blue-400 ml-[110px]">view more </p>
            </div>
            <div className="w-[300px] ml-8 h-[300px] rounded-lg  border border-black">
              <img
                className="ml-10 h-44 mt-6  w-44"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR782QwspNySvmIBGube4N2jRyxKCImOL1n-6TOtcs8j3M3XANd25r9eQSOh1Pu-CreaGI&usqp=CAU"
                alt=""
              />
              <p className="ml-[100px] mt-7">Flowerbokkey</p>
              <p className="text-blue-400 ml-[110px]">view more </p>
            </div>
          </div>
        </div>
        
      </div>
    
  )
}

export default AdminGifts