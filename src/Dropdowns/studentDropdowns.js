import { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';

const StudetAction = () => {
  const btnDropdownRef = useRef(null);
  const popoverDropdownRef = useRef(null);
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        btnDropdownRef.current &&
        popoverDropdownRef.current &&
        !btnDropdownRef.current.contains(event.target) &&
        !popoverDropdownRef.current.contains(event.target)
      ) {
        closeDropdownPopover();
      }
    };

    if (dropdownPopoverShow) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
    
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [dropdownPopoverShow]);

  const toggleDropdownPopover = () => {
    setDropdownPopoverShow(!dropdownPopoverShow);
  };

  return (
    <div style={{ position: 'relative' }}>
      <a
        className="text-blueGray-500"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          toggleDropdownPopover();
        }}
      >
        <i className='mr-2'><Icon icon="icon-park-outline:more-one" /></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 absolute right-0 top-0 rounded shadow-lg"
        }
      >
        <a
        href="#pablo"
        className={
          "text-sm py-2 hover:bg-sky-100 items-center flex px-4 font-normal block w-full whitespace-nowrap bg-transparent"
        }
        onClick={(e) => e.preventDefault()}
      >
        <i className='mr-2'><Icon icon="ep:view" /></i>
        View
      </a>
      <a
        href="#pablo"
        className={
          "text-sm py-2 hover:bg-sky-100 items-center flex px-4 font-normal block w-full whitespace-nowrap bg-transparent"
        }
        onClick={(e) => e.preventDefault()}
      >
        <i className='mr-2'><Icon icon="la:edit" /></i>
        Edit
      </a>
      <a
        href="#pablo"
        className={
          "text-sm py-2 hover:bg-sky-100 items-center flex px-4 font-normal block w-full whitespace-nowrap bg-transparent"
        }
        onClick={(e) => e.preventDefault()}
      >
        <i className='mr-2'><Icon icon="mdi-light:delete" /></i>
        Delete
      </a>
      </div>
    </div>
  );
};

export default StudetAction;
