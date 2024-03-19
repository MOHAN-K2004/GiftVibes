import React from 'react'
import UserNavbar from './UserNavbar'

const UserPaymentdetails = () => {
  return (
    <div>
        <UserNavbar/>
        <div>
            <h1 class="text-5xl mt-[25px] ml-[100px]">Payment Details</h1>

        </div>
        <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table
          class="min-w-full text-left text-sm font-light text-surface dark:text-black">
          <thead
            class="border-b border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark">
            <tr>
              <th scope="col" class="px-6 py-4">S.no</th>
              <th scope="col" class="px-6 py-4">Product image</th>
              <th scope="col" class="px-6 py-4">ProductId</th>
              <th scope="col" class="px-6 py-4">ProductName</th>
              <th scope="col" class="px-6 py-4">Price</th>
              <th scope="col" class="px-6 py-4">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
              <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td class="whitespace-nowrap px-6 py-4">
                <img className='w-[100px] h-[100px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRXOuEPLl6gvfTju3lXF1TdU8kwqtA9IYTil6tS1Sr1A&s" alt="" />
              </td>
              <td class="whitespace-nowrap px-6 py-4">#9045835</td>
              <td class="whitespace-nowrap px-6 py-4">Pillow</td>
              <td class="whitespace-nowrap px-6 py-4">$350</td>
              <td class="whitespace-nowrap px-6 py-4">5-02-2024</td>
            </tr>
            <tr
              class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
              <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td class="whitespace-nowrap px-6 py-4">
                <img className='w-[100px] h-[100px] rounded-r-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_w91Pi-YhcCBNuk9AO0g6xovecKHuFwGS3qeUrOkleA&s" alt="" />
              </td>
              <td class="whitespace-nowrap px-6 py-4">#7754928</td>
              <td class="whitespace-nowrap px-6 py-4">Birthday Cake</td>
              <td class="whitespace-nowrap px-6 py-4">$500</td>
              <td class="whitespace-nowrap px-6 py-4">8-03-2024</td>
            </tr>
            <tr
              class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
              <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
              <td class="whitespace-nowrap px-6 py-4">
                <img className='w-[100px] h-[100px]' src="https://www.kukkr.com/cdn/shop/products/gift-cake-kukkr-cakes-1.jpg?v=1677135356&width=1946" alt="" />
              </td>
              <td class="whitespace-nowrap px-6 py-4">#384449</td>
              <td class="whitespace-nowrap px-6 py-4">Birthday Cake</td>
              <td class="whitespace-nowrap px-6 py-4">$499</td>
              <td class="whitespace-nowrap px-6 py-4">11-02-2024</td>
            </tr>
            <tr
              class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
              <td class="whitespace-nowrap px-6 py-4 font-medium">4</td>
              <td class="whitespace-nowrap px-6 py-4">
                <img className='w-[100px] h-[100px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMnNbNj9SYd-IwNuJAGLYPtjSf1CrJDUjMexpyUL0zLQ&s" alt="" />
              </td>
              <td class="whitespace-nowrap px-6 py-4">#092378</td>
              <td class="whitespace-nowrap px-6 py-4">Jewellery</td>
              <td class="whitespace-nowrap px-6 py-4">$3350</td>
              <td class="whitespace-nowrap px-6 py-4">11-03-2024</td>
            </tr>
            <tr
              class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
              <td class="whitespace-nowrap px-6 py-4 font-medium">5</td>
              <td class="whitespace-nowrap px-6 py-4">
                <img className='w-[100px] h-[100px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTipoZ70p7vnGLx9v_9slRlAl9BYiHRdZ3obIsPeZ3MSA&s" alt="" />
              </td>
              <td class="whitespace-nowrap px-6 py-4">#345267</td>
              <td class="whitespace-nowrap px-6 py-4">Frame</td>
              <td class="whitespace-nowrap px-6 py-4">$300</td>
              <td class="whitespace-nowrap px-6 py-4">15-03-2024</td>
            </tr>
                <tr
                class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
                <td class="whitespace-nowrap px-6 py-4 font-medium">6</td>
                <td class="whitespace-nowrap px-6 py-4">
                    <img className='w-[100px] h-[100px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuRipjMUr4E0pu8pEQ7LjU0kplDBoLWPTThJKpb7jsA&s" alt="" />
                </td>
                <td class="whitespace-nowrap px-6 py-4">#6543292</td>
                <td class="whitespace-nowrap px-6 py-4">Flower Bokkey</td>
                <td class="whitespace-nowrap px-6 py-4">$200</td>
                <td class="whitespace-nowrap px-6 py-4">15-03-2024</td>
                </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserPaymentdetails