import React from "react";
import Navbar from "./Navbar";
import curveblue from "../assets/curveblue.svg";
import curvelightblue from "../assets/curvelightblue.svg";
import curvewhite from "../assets/curvewhite.svg";
import Footer from "./Footer";
const Home = () => {
  return (
    <div class=" w-full  ">
      <Navbar />
      <div class="w-full flex justify-between h-[740px] bg-lightBlue">
        <div class=" mt-40 ml-[200px] h-[400px] w-[525px] flex-col">
          <h1 class="text-6xl font-bold text-blue-950 font-intter">
            Employee & client gifting in a snap
          </h1>
          <h3 class="mt-10 text-[20px] text-blue-700">
            Reward employees and customers with ease - send gift choices and let
            them pick their favorite.
          </h3>
          <div class="mt-20">
            <button class="h-14 w-44 ml-10 bg-blue-700 rounded-xl text-white">
              Get Started
            </button>
            <button class="h-14 w-44 ml-20 bg-blue-200  border-gray-950 rounded-xl">
              Book a Demo
            </button>
          </div>
        </div>
        <div class="flex mt-40 ">
          <div>
            <img
              src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/652807b4781d53e6dca800b3_hero-prod-07.webp"
              alt=""
            />
            <img
              class="mt-2"
              src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/65312fb0ea938d7d2422723a_hero-prod-01-update.webp"
              alt=""
            />
            <img
              class="mt-2"
              src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/652807b460d3757a1dbd2957_hero-prod-06.webp"
              alt=""
            />
          </div>
          <div class="mt-10 ml-2">
            <img
              src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/65312fb0e310a62d484b5190_hero-prod-03-update.webp"
              alt=""
            />
            <img
              class="mt-2"
              src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/65312fb073f7c86a4f85f9fc_hero-prod-05-update.webp"
              alt=""
            />
            <img
              class="mt-2"
              src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/652807b5128f342748d25379_hero-prod-02.webp"
              alt=""
            />
          </div>
          <div class="ml-2">
            <img
              src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/65312fb0b84baeb20280d813_hero-prod-02-update.webp"
              alt=""
            />
            <img
              class="mt-2"
              src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/652d683e4a365e73855a05ec_hero-prod-04-update.webp"
              alt=""
            />
            <img
              class="mt-2"
              src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/6537c54493290bb457a4e7f5_hero-prod-08-update.webp"
              alt=""
            />
          </div>
        </div>

        <div>
          <img
            class=" mt-56 mr-0 h-80 w-44"
            src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/64529be600becc108309af95_snappy-hero-no-juggle.webp"
            alt=""
          />
        </div>
      </div>
      <div className="-mb-1">
        <img className="" src={curveblue} alt="" />
      </div>
      <div class="w-full flex justify-between  text-white h-[750px] bg-bluecolor">
        <div class="ml-44 mt-20 w-[500px] ">
          <div>
            <h1 class="text-5xl font-bold">For a Sender:</h1>
          </div>
          <div class="mt-10 ml-5">
            <div class="flex">
              <img
                class="mt-1"
                src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/652807b13d918be8e882b657_point-01-icon.svg"
                alt=""
              />
              <h4 class="mt-3 ml-2 text-3xl">Choose what to send</h4>
            </div>
            <p class="ml-12 mt-3">
              Send a gift collection, branded swag, or mix them together. You
              can even send a single gift for those times when you know exactly
              what to give.
            </p>
          </div>
          <div class="mt-10 ml-5">
            <div class="flex ">
              <img
                src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/652807b3013a9ec6c8c20f8a_point-02-icon.svg"
                alt=""
              />
              <h4 class="mt-3 ml-2 text-3xl"> Customize the experience</h4>
            </div>
            <p class="ml-12 mt-3">
              Select a unique digital unwrapping experience. Add your logo,
              personal greeting or video, and send via email, text, or link. No
              address needed.
            </p>
          </div>
          <div class="mt-10 ml-5">
            <div class="flex">
              <img
                src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/652807b1f92d76d934a4bd27_point-03-icon.svg"
                alt=""
              />
              <h4 class="mt-3 ml-2 text-4xl">Relax and feel the love</h4>
            </div>
            <p class="ml-12 mt-3">
              Track gift status, view insights, and see top gift choices.
              Receive thank you notes from happy recipients.
            </p>
          </div>
          <div> 
          {/* <img className="mt-[700px]" src={curvewhite} alt="" /> */}
        </div>
        </div>
        <div>
          <img
            className="w-[550px] mt-[200px] mr-[100px] h-[400px]"
            src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/652807b7f388690216829844_gifter-slide-02-screen.webp"
            alt=""
          />
          <img
            className="-mt-[320px] -ml-[100px]"
            src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/652807b9887055a875c674d0_gifter-02-email.webp"
            alt=""
          />
          <img
            className="mt-[10px] -ml-[100px]"
            src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/652807b8e257367f055c6735_gifter-02-message.webp"
            alt=""
          />
          <img
            className="-mt-[0px] ml-[400px]"
            src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/652807b7203d65a9f4ed2965_gifter-slide-01-amy.webp"
            alt=""
          />
       
      </div>
     
      </div>
      <img class="-mt-20" src={curvelightblue} alt="" />
      <div class="h-[875px] -mt-[10px] w-full bg-cyan-400 ">
        <div class="">
          <p class="text-3xl ml-[450px] w-[700px]  text-black font-extrabold">
            Build a culture of appreciation and gratitude
          </p>
        </div>
        <div class="w-[570px] mt-7 ml-[480px] font-bold text-white">
          <p className="ml-3">
            Join the 43% of Fortune 100 companies that trust Snappy to create   </p>
            <p> impactful gifting programs for their employees, customers, and
            prospects.
          </p>
        </div>
        <div className="mt-11 ml-[500px]">
          <button class="h-14 w-44 ml-10 bg-blue-700 rounded-xl text-white">
            Starting Gifting{" "}
          </button>
          <button class="h-14 w-44 ml-20 bg-blue-200  border-gray-950 rounded-xl">
            Book a Demo
          </button>
        </div>
        <div class="flex justify-center mt-10">
          <div class="w-[400px] h-[250px]  bg-white rounded-lg flex-row">
            <div class="h-[50px] w-[50px] mt-5 ml-3">
              <img
                src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/652807b299c8846b5358e22d_hp-quotes.svg"
                alt=""
              />
            </div>
            <div class="ml-9 pr-2">
              <p>
                Our employee survey shows wellness and morale have jumped over
                the past two years since launching Snappy.
              </p>
            </div>
            <div class="ml-9 mt-2">
              <b>Megan Murphy</b>
              <p>Salesforce</p>
            </div>
            <div class="h-[100px] w-[100px] ml-72 -mt-[25px]">
              <img
                src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/65a09f44bef9be00ccc08519_sf-logo-nbv2.svg"
                alt=""
              />
            </div>
          </div>
          <div class="w-[400px] ml-4 h-[250px] bg-white rounded-lg">
            <div class="h-[50px] mt-5 ml-3 w-[50px]">
              <img
                src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/652807b299c8846b5358e22d_hp-quotes.svg"
                alt=""
              />
            </div>
            <div class="ml-9 pr-2">
              <p>
                We’ve received overwhelmingly positive feedback since
                implementing Snappy at PepsiCo.
              </p>
            </div>
            <div class="mt-4 ml-9">
              <b> Elina Feldman</b>
              <p>PepsiCo</p>
            </div>
            <div class="h-[100px] w-[100px] ml-72 -mt-[25px]">
              <img
                src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/65a09f43090d7f6717222c81_pepsico-logo-nbv2.svg"
                alt=""
              />
            </div>
          </div>
          <div class="w-[400px] ml-4 h-[250px] bg-white rounded-lg">
            <div class="h-[50px]  mt-5 ml-3  w-[50px]">
              <img
                src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/652807b299c8846b5358e22d_hp-quotes.svg"
                alt=""
              />
            </div>
            <div class="ml-9 pr-2">
              <p>
                Recipients love that they can pick their own gift. I like that
                there's an array of options to choose from that you might
                actually want.
              </p>
            </div>
            <div class="mt-4 ml-9">
              <b> Dayna Doroshow</b>
              <p>Comcast</p>
            </div>
            <div class="h-[100px] w-[100px] ml-72 -mt-3  ">
              <img
                src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/65a09f432d159585cdc8710e_comcast-logo-nbv2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="mt-[50px] justify-center flex-row ">
          <div class="justify-center ml-[500px] text-3xl text-white ">
            <p>Trusted by 1,000s of leading organizations</p>
          </div>
          <div class=" mt-6 ml-[200px]">
            <img
              src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/65a09ec771a3c6a9b81eadaa_logos-nbv2.svg"
              alt=""
            />
          </div>
        </div>
        <div className="mt-32">
          <img src={ curveblue} alt="" />
        </div>
      </div>
      <div className="w-full h-[850px] bg-bluecolor1 flex justify-between">
        <div className="text-white mt-[200px]  ml-[200px]">
          <div className="font-bold "><h1>A one-stop shop for gifting</h1></div>
          <div class="w-[400px] mt-5"><p>Snappy is the award-winning, all-in-one gifting company helping spread joy, share gratitude, and take all the guesswork out of gift giving.</p></div>
          <div>
            <div className="flex mt-5">
              <img src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/652807b3e257367f055c5759_hp-big-check.svg" alt="" />
              <p className="mt-3 ml-3">Shipping always included</p>
              </div>
            <div className="flex mt-5 "> 
              <img src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/652807b3e257367f055c5759_hp-big-check.svg" alt="" />
              <p className="mt-3 ml-3">Only the best brands</p>
              </div>
            <div className="flex mt-5">
              <img src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/652807b3e257367f055c5759_hp-big-check.svg" alt="" />
              <p className="mt-3 ml-3">Physical and digital gifts for 200+ countries</p>
              </div>
            </div>
            <div className="h-12 mt-[70px] w-[250px] rounded-lg p-[10px] pl-[30px] bg-white text-black"><button>See Product Overview</button></div>
             
            <img className="-ml-[200px] -mt-[200px]" src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/64063cff880a4201010b7207_cloud-left.webp" alt="" />
        </div>
        <div className="">
          <img className="ml-[100px] z-40 mt-[100px]" src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/65d4c3a0abda4cb0545f3dee_hp-prod-screen-lrg-2-p-500.webp" alt="" />
          
          <img className="mr-[500px] -mt-[500px] h-[400px] w-[230px]" src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/65d4c4bafc7ffb7ef8b5f2a4_hp-phone-lrg-p-500.webp" alt="" />
           <img className="ml-[500px] -mt-[500px]" src="https://assets-global.website-files.com/63d3e96d846e7c323c1bed54/64bfeac3e0759aaafd541189_cloud-right.png" alt="" />
        </div>
      </div>
        <div className="-mt-[80px]" >
          <img className="w-full" src={curvewhite} alt="" />
        </div>
        <Footer/>
    </div>
      
  );
};

export default Home;
