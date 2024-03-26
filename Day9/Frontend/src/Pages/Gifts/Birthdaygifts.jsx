import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Birthdaygifts = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex'>
            <div className='flex  mt-[150px]  ml-[40px] mr-[40px] justify-between w-full'>

            <div className='h-[400px] w-[300px] border border-black rounded-lg'>
                <img className='h-[150px] w-[150px] mt-[10px] ml-[50px]' src="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-magic-cuppa-personalized-mug-186583-m.jpg" alt="" />
                <h1 className='ml-[20px] mt-[10px]'>Magic Cuppa Personalized Mug</h1>
                <h2 className='ml-[20px] mt-[10px]'>
                ₹ 1345 <s className=''> ₹ 1425</s>

                </h2>
                <button className='h-10 w-[100px] mt-[10px] ml-[70px] rounded-sm border border-green-500 text-green-400'>60% OFF</button>
                <h3 className=' mt-[10px] ml-[70px] text-blue-400 '><u>view more</u></h3>
                <button className='h-10 mt-7 ml-10 rounded-xl w-[200px] bg-black text-white'>ADD TO CART</button>
            </div>

            <div className='h-[400px] w-[300px] border border-black rounded-lg'>
                <img className='h-[150px] w-[150px] mt-[10px] ml-[50px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQndo3KFpUvA0AcriYFFkG9_RSJL56Yh2YewQ&s" alt="" />
                <h1 className='ml-[20px] mt-[10px]'>Magic Cuppa Personalized Mug</h1>
                <h2 className='ml-[20px] mt-[10px]'>
                ₹ 1345 <s className=''> ₹ 1425</s>

                </h2>
                <button className='h-10 w-[100px] mt-[10px] ml-[70px] rounded-sm border border-green-500 text-green-400'>60% OFF</button>
                <h3 className=' mt-[10px] ml-[70px] text-blue-400 '><u>view more</u></h3>
                <button className='h-10 mt-7 ml-10 rounded-xl w-[200px] bg-black text-white'>ADD TO CART</button>
            </div>

            <div className='h-[400px] w-[300px] border border-black rounded-lg'>
                <img className='h-[150px] w-[150px] mt-[10px] ml-[50px]' src="https://www.thedatingdivas.com/wp-content/uploads/2020/07/birthday-present.jpeg" alt="" />
                <h1 className='ml-[20px] mt-[10px]'>suprised gift</h1>
                <h2 className='ml-[20px] mt-[10px]'>
                ₹ 1345 <s className=''> ₹ 1425</s>

                </h2>
                <button className='h-10 w-[100px] mt-[10px] ml-[70px] rounded-sm border border-green-500 text-green-400'>60% OFF</button>
                <h3 className=' mt-[10px] ml-[70px] text-blue-400 '><u>view more</u></h3>
                <button className='h-10 mt-7 ml-10 rounded-xl w-[200px] bg-black text-white'>ADD TO CART</button>
            </div>

            <div className='h-[400px] w-[300px] border border-black rounded-lg'>
                <img className='h-[150px] w-[150px] mt-[10px] ml-[50px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvv8ooAxAX1Wce1EcuQCXGxm70aIt3C0k9jFLOgJ_mEw&s" alt="" />
                <h1 className='ml-[20px] mt-[10px]'>picture Art</h1>
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

export default Birthdaygifts