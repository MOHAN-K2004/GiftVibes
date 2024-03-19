import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram} from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
  return (
    <div>
        <div className='h-[500px] w-[100vw] mt-[100px]'>
            <div class="h-[100px] w-full">
                <h1 class='text-blue-900 ml-[600px]'>Spread smiles with Snappy!</h1>
                 <h3 class='ml-[550px] '>Explore how our gifting solutions can work for you.</h3>
            </div>
            <div class="flex justify-between ml-[200px] mr-[200px] ">
                <div>
                    <img src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/643fe505bdfdcc08e973fdbe_snappy-footer.png" alt="" />
                </div>
                <div>
                    <b>Business</b>
                    <p class="mt-4">Product Overview</p>
                    <p class="mt-4">Integrations</p>
                    <p class="mt-4">Gifty API</p>
                    <p class="mt-4">Pricing</p>
                    <p class="mt-4">Branded Swag</p>
                    <p class="mt-4">Gift Collections</p>
                    <p class="mt-4">Employee Appreciation Gifts</p>
                    <p class="mt-4">Customer Gifts</p>
                     <p class="mt-4"> 
                      <div>
                      Gifty's Gift Hunt
                      <button class=" h-7 w-14 bg-blue-200 ml-3 rounded-lg">New</button>
                      </div>
                    </p>
                </div>
                <div>
                    <b class="mt-4">Personal</b>
                    <p class="mt-4">Friends & Family</p>
                    <p class="mt-4">AI Gifting Assistant</p>
                    <p class="mt-4">Help</p>
                    <p class="mt-4">Affliates</p>
                </div>
                <div>
                   <b class="mt-4">Resource</b>
                   <p class="mt-4">About Gifty</p>
                   <p class="mt-4">News & Press</p>
                   <p class="mt-4">Gift Fuides</p>
                   <p class="mt-4">Blog</p>
                   <p class="mt-4">Case Studies</p>
                   <p class="mt-4">Careers</p>
                   <p class="mt-4">Brand Guidelines</p>
                   <p class="mt-4">Help Center</p>
                   <p class="mt-4">Contact us</p>
                </div>
                <div>
                     <b>Legal</b>
                     <p class="mt-4">Terms of Use</p>
                     <p class="mt-4">Approved List</p>                    
                     <p class="mt-4">Pivacy Policies</p>
                     <p class="mt-4">Data Processing</p>
                     <p class="mt-4">Cookie Policy</p>
                     <p class="mt-4">Gifty AI Terms</p>
                     <p class="mt-4">Gifty Gift Hunt Terms</p>
                </div>
            </div>
            <div class="mt-20 flex justify-center">
                <h1 class="mt-3">Looking for a gift you've received? </h1>
                <button class="ml-10 rounded-xl -12 w-40 border border-black">Find My Button</button>
            </div>
            <div class="h-[100px] mt-10 w-full flex justify-between">
                 <div>
                    <h1 class="ml-[150px]">Gifty App, Inc. ©2024 All rights reserved. 33 Irving Place, #5021, Coimbatore, 640042.</h1>
                 </div>
                 <div class="flex justify-between text-blue-900 ">
                    <CiFacebook class="size-7 mr-5"/>
                    <CiInstagram  class="size-7 mr-5"/>
                    <CiTwitter  class="size-7 mr-5"/>
                    <CiLinkedin  class="size-7 mr-5"/>

                 </div>
            </div>

        </div>
    </div>
  )
}

export default Footer