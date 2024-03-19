import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate=useNavigate();
  const gotoadminpaymenthistory=()=>{
    navigate('/adminpaymenthistory');
  }
  const gotologin=()=>{
    navigate('/login');
  }
  const gotoadminthemes=()=>{
    navigate('/adminthemes');
  }
  const gotoadmingifts=()=>{
    navigate('/admingifts');
  }
  const gotoadminvieworders=()=>{
    navigate('/adminvieworders');
  }
  return (
    <div>
      <div className="h-20 w-full shadow-lg flex fixed z-50 justify-between bg-white">
        <div className=" flex justify-between ml-5 ">
          <p  onClick={gotoadmingifts} class="ml-5 mt-5 hover:text-blue-400 cursor-pointer">Gifts</p>
          <p onClick={gotoadminthemes} class="ml-5 mt-5 hover:text-blue-400 cursor-pointer">Themes</p>
          <p onClick={gotoadminvieworders} class="ml-5 mt-5 hover:text-blue-400 cursor-pointer">View Orders</p>
          <p onClick={gotoadminpaymenthistory} class="ml-5 mt-5 hover:text-blue-400 cursor-pointer">Payment History</p>
          <p onClick={gotologin} class="ml-5 mt-5 hover:text-blue-400 cursor-pointer">Logout</p>
        </div>
        <div className="flex">
          <h1 className="mt-7 mr-6">Admin Mohan</h1>
          <img
            className="mt-4 mr-[100px] h-11 w-11 rounded-full "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMBF-dzHYR9kNO9DVIvmBsXDXJMiAGR17M1jcA1wbIQ&s"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
