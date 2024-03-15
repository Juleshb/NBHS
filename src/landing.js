import Navbar from "./components/Nav/landingnav2";
import { Icon } from "@iconify/react";
import backgroundImage from "./assets/bg.jpg"
import backgroundImage2 from "./assets/nini.jpg"
import Studentsform from "./components/Login/userform";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";

const LandingPage = () => {


  return (
<>
    <Navbar transparent/>
    <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-85">
          <div
           className="absolute top-18 w-full h-full bg-center bg-cover bg-fixed"
           style={{
             backgroundImage: `url(${backgroundImage})`,
           }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-primary"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                    <br></br>
                    <br></br>
                  <h1 className="text-white font-semibold text-3xl">
                  Welcome to Newborn Hearing Loss and Genetic Screening in Rwanda (NBHS)
                  </h1>
                  <p className="text-base tracking-wider text-white p-6 font-light"> The NBHS Research project in Rwanda is dedicated <br></br>
                   to advancing newborn hearing screening by implementing 
                   a robust model for the early detection of hearing 
                   impairments in newborns. Concurrently, the project 
                   aims to delve into genetic assessments to identify 
                   genetic patterns associated with newborn hearing loss. 
                   This collaborative effort seeks to ensure timely 
                   interventions and support for affected infants in Rwanda.</p>
                  <h1 className="text-white font-semibold mb-0 text-2xl underline underline-offset-8">
                 
                  </h1>
                </div>
              </div>
            </div>
          </div>
         
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center ">
                <div className="hover:text-white hover:bg-primary text-primary relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="border hover:border-white border-primary p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ">
                    <Icon icon="mdi:register-outline" />
                    </div>
                    <h6 className="text-base  font-semibold">Step 1: Register before login</h6>
                    <p className="mt-2 mb-4 ">
                    Go to the link Application, Complete all Information After Finding your Information you will recive comfrimation Email.
                    </p>
                    <p className="underline text-base mt-5">
                      <a href="#register" title="Meet our doctors" className="">
                        Register now
                       </a>
                    </p>

                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="hover:text-white hover:bg-primary text-primary relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white border border-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-primary">
                    <Icon icon="tabler:login-2" />
                    </div>
                    <h6 className="text-base  font-semibold">Step 2: Login by using E-mail ID</h6>
                    <p className="mt-2 mb-4 ">
                    Please login with your E-mail ID, and PIN that you either created when you completed the application or that you have been given.
                    </p>
                    <p className="underline text-base mt-5">
                      <Link href="/1/clinical/doctors" title="Meet our doctors" to="/login" className="">
                        Login
                       </Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="hover:text-white hover:bg-primary text-primary relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <div className=" border border-primary p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ">
                    <Icon icon="mdi:help-outline" />
                    </div>
                    <h6 className="text-base  font-semibold">Step 3</h6>
                    <p className="mt-2 mb-4 ">
                    After login system will Guide you step by step .
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
  
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-85" id="contactus">
          <div
           className="absolute top-18 w-full h-full bg-center bg-cover bg-fixed"
           style={{
             backgroundImage: `url(${backgroundImage2})`,
           }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-primary"
            ></span>
          </div>

<div className="container relative mx-auto text-white ">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                    
                  <h1 className="text-white mb-10 font-semibold text-3xl">
                  Get in touch with us</h1>
                  <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between">

                  <div className="md:w-1/2 mt-4 md:mt-0 md:pr-8 gap-4 justify-items-start">
        
        <div className="flex ml-5 mt-10">
                <Icon icon="clarity:map-marker-line" width="30" />
                  <h2 className="font-light ml-5  tracking-wide md:text-center xs:text-center ">Kigali, Rwanda</h2>
                </div>
                <div className="flex ml-5  mt-5">
    
    <Icon icon="clarity:email-line" width="30" />
    
      <h2 className="  font-light ml-5  tracking-wide md:text-center xs:text-center ">contact@phantom.com</h2>
    </div>
    <div className="flex ml-5 mt-5">
      <Icon icon="fluent:call-24-regular" width="30" />
      <h2 className=" ml-5  font-light tracking-wide md:text-center xs:text-center ">+250-788-888-887</h2>
    </div>
          </div>
       
                  <div className="md:w-1/2 md:pr-8">
        
                  <form >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="col-span-1">
          <label htmlFor="lastName" className="block text-sm font-medium ">Names</label>
          <input type="text" name="lastName" id="lastName"  className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" required />
        </div>
        <div className="col-span-1">
          <label htmlFor="email" className="block text-sm font-medium ">Email</label>
          <input type="email" name="email" id="email"  className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" required />
        </div>
        <div className="col-span-1">
          <label htmlFor="pin" className="block text-sm font-medium ">Message</label>
          <textarea  className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" required />
        </div>
        
        <button type="submit" className="mt-4 px-4 py-3 bg-white text-primary rounded-lg hover:bg-primary hover:opacity-50 hover:text-white border hover:border-white border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 items-center text-center flex">
      <i className='mr-2'><Icon icon="grommet-icons:send" /></i> Submit
      </button>
          
      </div>
      
    </form>
    </div>
   
    </div>

                </div>
              </div>
            </div>
          </div>

    </div>

       
      
        <section className="relative mt-20 block lg:pt-0 bg-blueGray-800" id="register">
         

                    <Studentsform/>

           
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default LandingPage;
