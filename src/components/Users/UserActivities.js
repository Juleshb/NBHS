import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function UserActivities() {
  return (
    <>
        <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center ">
                <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-white hover:bg-primary text-primary relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="border hover:border-white text-5xl border-primary p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ">
                    <Icon icon="material-symbols-light:chart-data-sharp" />
                    </div>
                    <h6 className="text-sm  font-semibold">Registed Born:</h6>
                    <p className="mt-2 mb-4  ms-1 text-6xl ">
                   100
                    </p>
                    <p className="underline text-base mt-5">
                      <Link title="Meet our doctors" className=""  to="/student/application" >
                      Downlod document
                       </Link>
                    </p>

                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-white hover:bg-primary text-primary relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white border text-5xl border-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-primary">
                    <Icon icon="mdi:cash" />
                    </div>
                    <h6 className="text-sm  font-semibold">Commision</h6>
                    <p className="mt-2 mb-4  ms-1 text-6xl text-sm ">
                    500 Rwf
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
         
       
        
       
     
    </>
  );
}
