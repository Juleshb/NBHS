import { useState } from 'react';
import Studentsform from '../Metron/Studentform';
import { Icon } from '@iconify/react';
import DocumentUploader from './adddocument';
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
            <i className='mr-2'><Icon icon="line-md:uploading-loop" /></i>
            Upload documents
        </button>
        <button
          className={`px-4 items-center mt-2 mb-2 rounded-lg text-xs flex  py-3 block ${
            activeTab === 2
            ? 'bg-white text-primary'
            : ''
          }`}
          onClick={() => handleTabClick(2)}
        >
            
        <i className='mr-2'><Icon icon="el:list-alt" /></i>
        Clinical Placement
        </button>
        <button
          className={`px-4 items-center mt-2 mb-2 rounded-lg text-xs flex  py-3 block ${
            activeTab === 3
            ? 'bg-white text-primary'
            : ''
          }`}
          onClick={() => handleTabClick(3)}
        >
            
        <i className='mr-2'><Icon icon="mingcute:department-fill" /></i>
        Select departments
        </button>
      </div>
      <div className="mt-4">
        {activeTab === 1 && (
          <div className="bg-white p-4 rounded-lg ">
            <DocumentUploader/>
          </div>
        )}
        {activeTab === 2 && (
          <div className="bg-white p-4 rounded-lg ">
           <Studentsform/>
          </div>
        )}
         {activeTab === 3 && (
          <div className="bg-white p-4 rounded-lg ">
           <DocumentUploader/>
          </div>
        )}
      </div>
    </div>
  );
}

export default TabNavigation;
