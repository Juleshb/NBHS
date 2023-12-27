import Navbar from "../components/Nav/nav";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar/NurseSidebar";
import { Route, Routes, Navigate } from 'react-router-dom';

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />

        <div className="relative md:pt-32 pb-32 pt-10"> 
      </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">

        <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center ">
                <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-white hover:bg-primary text-primary relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="border hover:border-white text-5xl border-primary p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ">
                    <Icon icon="line-md:uploading-loop" />
                    </div>
                    <h6 className="text-sm  font-semibold">Step 3: Upload all required documents</h6>
                    <p className="mt-2 mb-4  ms-1 text-sm ">
                    As you read before sign in there is 9 documents to be uploaded
All Must be in PDF and Not more than 2Mbs
If you are foreigner The Clinical Placement fee will be paid at your arrival in Kigali. And slip uploaded
                    </p>
                    <p className="underline text-base mt-5">
                      <Link title="Meet our doctors" className=""  to="/student/application" >
                      Upload documents
                       </Link>
                    </p>

                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-white hover:bg-primary text-primary relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white border text-5xl border-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-primary">
                    <Icon icon="icon-park-solid:calendar" />
                    </div>
                    <h6 className="text-sm  font-semibold">Step 4: Select Your Clinical Placement duration</h6>
                    <p className="mt-2 mb-4  ms-1 text-sm ">
                    Choose Starting date you wish to begin and End date of your Clinical Placement.
                    </p>
                  
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-white hover:bg-primary text-primary relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <div className=" border text-5xl border-primary p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ">
                  <Icon icon="mingcute:department-fill" />
                    </div>
                    <h6 className="text-sm  font-semibold">Step 5: Select departments</h6>
                    <p className="mt-2 mb-4  ms-1 text-sm ">
                    On this step you will be able to choose more than one departments.<br/>
                   <b>Please be carefull for choosing Start and End date of each departments,make sure that in your duration you will be occupied in any departments.
By making any error your application will be Rejected</b> <br/>
-Then Send your application by click finish button
                    </p>
                  </div>
                </div>
              </div>
            </div>
          
          <Routes>
            <Route path="*" element={<Navigate to="/nurses" />} />
          </Routes>
         
        </div>
        
       
      </div>
    </>
  );
}
