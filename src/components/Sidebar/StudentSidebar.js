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
                <a className="navbar-brand flex m-0" href="index.php">
                  <img src={logo} className="h-10" alt="main_logo" />
                  <span className="hidden sm:inline-block ms-1 text-xs font-bold text-primary"> <br /> </span>                
                  </a>
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
                <a className="navbar-brand flex m-0" href="index.php">
                  <img src={logo} className="h-10" alt="main_logo" />
                  <span className="ms-1 text-xs font-bold text-primary "><br></br></span>
                </a>
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
              <li className="items-center hover:bg-sky-100 px-4 rounded-lg ">
                <Link
                  className={
                    "text-xs   py-3 block flex " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : " hover:text-blueGray-500")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ><Icon icon="ic:outline-dashboard" /></i>{""}
                 
                  Dashboard
                </Link>
              </li>

              <li className={"items-center hover:bg-sky-100 px-4 rounded-lg " +
                   (window.location.href.indexOf("/adimin/sutudent") !== -1 
                     ? "bg-sky-100 rounded-lg"
                     : "hover:bg-sky-100")
                     }>
                <Link
                  className={
                    "text-xs flex  py-3 block " 
                  }
                  to="/adimin/sutudent"
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf("/adimin/sutudent") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ><Icon icon="zondicons:add-outline" /></i>{" "}
                  
                  New Application
                </Link>
              </li>

              <li className="items-center hover:bg-sky-100 px-4 rounded-lg">
                <Link
                  className={
                    "text-xs  flex py-3  block " +
                    (window.location.href.indexOf("/admin/tables") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : " hover:text-blueGray-500")
                  }
                  to="/admin/tables"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/tables") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ><Icon icon="healthicons:i-documents-accepted-outline" /></i>{" "}
                  
                 Approved request
                </Link>
              </li>

              <li className="items-center hover:bg-sky-100 px-4 rounded-lg">
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
                  
                  Rejected request
                </Link>
              </li>

              <li className="items-center hover:bg-sky-100 px-4 rounded-lg">
                <Link
                  className=" hover:text-blueGray-500 text-xs flex  py-3 block"
                  to="/auth/login"
                >
                  <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"><Icon icon="mdi:lan-pending" /></i>{" "}
                  
                 Pending request
                </Link>
              </li>

              <li className="items-center hover:bg-sky-100 px-4 rounded-lg">
                <Link
                  className=" hover:text-blueGray-500 text-xs flex  py-3  block"
                  to="/auth/register"
                >
                  <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"><Icon icon="bx:book" /></i>{" "}
                  
                 Logbook page
                </Link>
              </li>

              <li className="items-center hover:bg-sky-100 px-4 rounded-lg ">
                <Link
                  className=" hover:text-blueGray-500 text-xs flex  py-3 block"
                  to="/profile"
                >
                  <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"> <Icon icon="mdi:bell-notification-outline" /></i>{" "}
                 
                  Notifications
                </Link>
              </li>
              
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
