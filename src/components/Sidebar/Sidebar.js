import logo from '../../../src/assets/logo.png'
import React from "react";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import UserDropdown from "../../Dropdowns/userDropdowns";



export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className=" md:left-0 z-40 sm:fixed fixed sm:w-full md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col  md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-primary  md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"><Icon icon="ri:menu-2-fill" /></i>
          </button>
          {/* Brand */}
          <div className="relative">
                <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 absolute top-0 end-0 md:hidden" aria-hidden="true" id="iconSidenav">h</i>
                <Link className="navbar-brand flex m-0" to="/studentpage">
                  <img src={logo} className="h-10" alt="main_logo" />
                  <span className="hidden sm:inline-block ms-1 text-xs font-bold text-primary"> <br /> </span>                
                  </Link>
              </div>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            
            <UserDropdown />
            
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
           >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 ">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                <Link className="navbar-brand flex m-0" to="/studentpage">
                  <img src={logo} className="h-10" alt="main_logo" />
                  <span className="ms-1 text-xs font-bold text-primary "><br></br></span>
                </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-primary  md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                   <Icon icon="ic:outline-close" />
                  </button>
                </div>
              </div>
            </div>

           
            <ul className="md:flex-col text-base font-medium leading-normal md:min-w-full text-primary flex flex-col list-none">
            <li className={"font-semibold items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-white hover:bg-primary px-4 rounded-lg " +
                   (window.location.href.indexOf("/adimin") !== -1 
                     ? "transition ease-in-out delay-150  translate-y-1 scale-110 duration-300 text-white bg-primary"
                     : "")
                     }>
              <Link
                  className={
                    "text-xs flex  py-3 block " 
                  }
                  to="/adimin"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/adimin") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ><Icon icon="ic:outline-dashboard" /></i>{""}
                 
                  Dashboard
                </Link>
              </li>

              <li className={"font-semibold items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-white hover:bg-primary px-4 rounded-lg " +
                   (window.location.href.indexOf("/healthcare") !== -1 
                     ? "transition ease-in-out delay-150  translate-y-1 scale-110 duration-300 text-white bg-primary"
                     : "")
                     }>
                <Link
                  className={
                    "text-xs flex  py-3 block " 
                  }
                  to="/healthcare"
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf("/healthcare") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ><Icon icon="tabler:hospital" /></i>{" "}
                  
                  Health Centers
                </Link>
              </li>

              <li className={"font-semibold items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-white hover:bg-primary px-4 rounded-lg " +
                   (window.location.href.indexOf("/admin/screaning") !== -1 
                     ? "transition ease-in-out delay-150  translate-y-1 scale-110 duration-300 text-white bg-primary"
                     : "")
                     }>
                <Link
                  className={
                    "text-xs flex  py-3 block " 
                  }
                  to="/admin/screaning"
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/screaning") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ><Icon icon="zondicons:add-outline" /></i>{" "}
                  
                  Screening
                </Link>
              </li>


              <li className="font-semibold items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-white hover:bg-primary px-4 rounded-lg">
                <Link
                  className={
                    "text-xs  flex py-3  block " +
                    (window.location.href.indexOf("/oaeresulte") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : " hover:text-blueGray-500")
                  }
                  to="/oaeresulte"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/oaeresulte") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ><Icon icon="healthicons:i-documents-accepted-outline" /></i>{" "}
                  
                 OAE Result
                </Link>
              </li>

              <li className="font-semibold items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-white hover:bg-primary px-4 rounded-lg">
                <Link
                  className={
                    "text-xs flex py-3  block " +
                    (window.location.href.indexOf("/admin/maps") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : " hover:text-blueGray-500")
                  }
                  to="/admin/maps"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/maps") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ><Icon icon="fluent:text-change-reject-20-regular" /></i>{" "}
                  
                  ABR Scale
                </Link>
              </li>
              <li className={"font-semibold items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-white hover:bg-primary px-4 rounded-lg " +
                   (window.location.href.indexOf("/users") !== -1 
                     ? "transition ease-in-out delay-150  translate-y-1 scale-110 duration-300 text-white bg-primary"
                     : "")
                     }>
                <Link
                  className={
                    "text-xs flex  py-3 block " 
                  }
                  to="/users"
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf("/users") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ><Icon icon="ph:users-three-thin" /></i>{" "}
                  
                  Users
                </Link>
              </li>

              <li className=" font-semibold items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-white hover:bg-primary px-4 rounded-lg">
                <Link
                  className=" hover:text-blueGray-500 text-xs flex  py-3  block"
                  to="/auth/register"
                >
                  <i className="fas fa-clipboard-list  mr-2 text-sm"><Icon icon="bx:book" /></i>{" "}
                  
                 Report
                </Link>
              </li>

             
              
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
