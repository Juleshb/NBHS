import { useState } from 'react';
import { Icon } from '@iconify/react';
import Registedborn from './getaberscale'
function TabNavigation() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6  border border-primary">
      <div className="items-center flex flex-wrap justify-center bg-primary text-white w-full h-auto space-x-4 ">

        <button
          className={`px-4 items-center mt-2 mb-2 rounded-lg text-xs flex  py-3 block ${
            activeTab === 1
              ? 'bg-white text-primary '
              : ''
          }`}
          onClick={() => handleTabClick(1)}
        >
            <i className='mr-2'><Icon icon="healthicons:i-documents-accepted-outline" /></i>
            Refers Born
        </button>
        {/* <button
          className={`px-4 items-center mt-2 mb-2 rounded-lg text-xs flex  py-3 block ${
            activeTab === 2
            ? 'bg-white text-primary'
            : ''
          }`}
          onClick={() => handleTabClick(2)}
        >
            
        <i className='mr-2'><Icon icon="el:list-alt" /></i>
        Registed Born
        </button> */}
       
      </div>
      <div className="mt-4">
        {activeTab === 1 && (
          <div className="bg-white p-4 rounded-lg ">
          
            <Registedborn/>
          </div>
        )}
        {/* {activeTab === 2 && (
          <div className="bg-white p-4 rounded-lg ">
        
         <Newborn/>
          </div>
        )}
  */}
      </div>
    </div>
  );
}

export default TabNavigation;
