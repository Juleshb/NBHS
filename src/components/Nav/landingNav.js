/*eslint-disable*/
import React from "react";
import logo from '../../../src/assets/log2.png'
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
// components


export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-primary shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="relative">
                <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 absolute top-0 end-0 md:hidden" aria-hidden="true" id="iconSidenav">h</i>
                <a className="navbar-brand flex m-0" href="index.php">
                  <img src={logo} className="h-10" alt="main_logo" />
                  <span className="hidden sm:inline-block ms-1 text-xs font-bold text-primary"> <br /> </span>                
                  </a>
              </div>
            <button
              className="cursor-pointer text-white text-3xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Icon icon="ci:menu-alt-01" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex text-primary flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <Link
                  className=" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                 to="/login"
                >
                 
                  Login
                </Link>
              </li>
           
    
              <li className="flex items-center">
                <a
                  className=" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#register"
                  
                >
                  <i className="fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Register</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href=""
                  target="_blank"
                >
                  <i className="-400 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Requirements</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
