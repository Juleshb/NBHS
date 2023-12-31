import React from "react";
import { createPopper } from "@popperjs/core";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

const UserDropdown = () => {

  const lastName = localStorage.getItem('lastName');
  const role = localStorage.getItem('role');

  //logout  
   const handleLogout = () => {
    // Clear user authentication status
    localStorage.removeItem('role'); // Remove the user role from localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('lastName');
  };

  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
     <a
        className=" block"
        href="#"
        
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-2xl text-primary  inline-flex items-center justify-center rounded-full">
          <Icon icon="mdi:bell-notification-outline" />
          </span>
        </div>
      </a>
      <Link
        className=" block"
        onClick={handleLogout}
        to="/login"
        
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-2xl text-primary inline-flex items-center justify-center rounded-full">
          <Icon icon="solar:logout-2-outline" />
          </span>
        </div>
        </Link>

      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
        <span className="w-12 h-12 text-2xl text-primary inline-flex items-center justify-center rounded-full">
        <Icon icon="solar:user-outline" />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          {lastName}
        </a>

        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          {role}
        </a>
       
       
       
        
      </div>
    </>
  );
};

export default UserDropdown;
