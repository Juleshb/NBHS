import { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from '../../../src/assets/log2.png'
import {Link} from 'react-router-dom';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <nav className="bg-primary border-b-2 fixed top-0 left-0 right-0 border-white z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                           
                              <Link to={"/landing"} >
                              <img
                                className="h-7 w-16"
                                 src={logo}
                                alt="logo"
                            />
                                    </Link>
                        </div>
                        <div className="flex items-center">

                            <div className="block sm:hidden xs:hidden">
                                <div className="ml-10 flex items-baseline space-x-4">

                                    <a href="#register" className=" hover:bg-white hover:text-primary text-white px-3 py-2 rounded-md text-base">
                                        Regist now
                                    </a>

                                    <a href="#contactus" className=" hover:bg-white hover:text-primary  text-white px-3 py-2 rounded-md text-base">
                                        Contact
                                    </a>

                                    <Link to={"/Login"} className=" hover:bg-white hover:text-primary  text-white px-3 py-2 rounded-md text-base">
                                        SignIn
                                    </Link>

    
                                </div>

                            </div>
                        </div>
                        <div className="-mr-2 flex sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-white-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:block" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">


                                    <Link to={"/Contact"} className="hover:bg-white hover:text-primary text-white px-3 py-2 rounded-md text-base block">
                                        Contact
                                    </Link>

                                    <Link to={"/Signin"} className="hover:bg-white hover:text-primary text-white px-3 py-2 rounded-md text-base block">
                                        SignIn
                                    </Link>

                                    

                               
                            </div>
                        </div>
                    )}
                </Transition>
            </nav >
        </div>
    );
}
export default Navbar;