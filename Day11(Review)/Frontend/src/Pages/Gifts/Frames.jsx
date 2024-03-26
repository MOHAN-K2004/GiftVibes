import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Frames = () => {
  return (
    <div>
          
        <Navbar/>
        <div className='flex'>
            <div className='flex  mt-[150px]  ml-[40px] mr-[40px] justify-between w-full'>

            <div className='h-[400px] w-[300px] border border-black rounded-lg'>
                <img className='h-[150px] w-[150px] mt-[10px] ml-[50px]' src="https://cdn.cherishx.com/uploads/1623419132_large.jpg" alt="" />
                <h1 className='ml-[20px] mt-[10px]'>Collage Frame</h1>
                <h2 className='ml-[20px] mt-[10px]'>
                ₹ 1345 <s className=''> ₹ 1425</s>

                </h2>
                <button className='h-10 w-[100px] mt-[10px] ml-[70px] rounded-sm border border-green-500 text-green-400'>60% OFF</button>
                <h3 className=' mt-[10px] ml-[70px] text-blue-400 '><u>view more</u></h3>
                <button className='h-10 mt-7 ml-10 rounded-xl w-[200px] bg-black text-white'>ADD TO CART</button>
            </div>

            <div className='h-[400px] w-[300px] border border-black rounded-lg'>
                <img className='h-[150px] w-[150px] mt-[10px] ml-[50px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOB54rIOL0z7Lq6fOEhPAaqxf8a4HzhPGIh46JFoM7g&s" alt="" />
                <h1 className='ml-[20px] mt-[10px]'>Single pic Frame</h1>
                <h2 className='ml-[20px] mt-[10px]'>
                ₹ 1345 <s className=''> ₹ 1425</s>

                </h2>
                <button className='h-10 w-[100px] mt-[10px] ml-[70px] rounded-sm border border-green-500 text-green-400'>60% OFF</button>
                <h3 className=' mt-[10px] ml-[70px] text-blue-400 '><u>view more</u></h3>
                <button className='h-10 mt-7 ml-10 rounded-xl w-[200px] bg-black text-white'>ADD TO CART</button>
            </div>

            <div className='h-[400px] w-[300px] border border-black rounded-lg'>
                <img className='h-[150px] w-[150px] mt-[10px] ml-[50px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOB54rIOL0z7Lq6fOEhPAaqxf8a4HzhPGIh46JFoM7g&s" alt="" />
                <h1 className='ml-[20px] mt-[10px]'>customized Frame</h1>
                <h2 className='ml-[20px] mt-[10px]'>
                ₹ 1345 <s className=''> ₹ 1425</s>

                </h2>
                <button className='h-10 w-[100px] mt-[10px] ml-[70px] rounded-sm border border-green-500 text-green-400'>60% OFF</button>
                <h3 className=' mt-[10px] ml-[70px] text-blue-400 '><u>view more</u></h3>
                <button className='h-10 mt-7 ml-10 rounded-xl w-[200px] bg-black text-white'>ADD TO CART</button>
            </div>

            <div className='h-[400px] w-[300px] border border-black rounded-lg'>
                <img className='h-[150px] w-[150px] mt-[10px] ml-[50px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0d0cKdr7uogD6Mq5mI7e4YVakjlx7ThgM0WG5UwiHqQ&s" alt="" />
                <h1 className='ml-[20px] mt-[10px]'>Wedding Frame</h1>
                <h2 className='ml-[20px] mt-[10px]'>
                ₹ 1345 <s className=''> ₹ 1425</s>

                </h2>
                <button className='h-10 w-[100px] mt-[10px] ml-[70px] rounded-sm border border-green-500 text-green-400'>60% OFF</button>
                <h3 className=' mt-[10px] ml-[70px] text-blue-400 '><u>view more</u></h3>
                <button className='h-10 mt-7 ml-10 rounded-xl w-[200px] bg-black text-white'>ADD TO CART</button>
            </div>
            </div>
        </div>
        <Footer/>

    </div>
  )
}

export default Frames