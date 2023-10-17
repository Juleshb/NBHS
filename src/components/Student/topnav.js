import { useState } from 'react';
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
          <div className="rounded-t  mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h4 className="text-lg font-bold text-primary">Please choose your internship duration.</h4>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form id="registrationForm" action="" method="POST">
              <input type="hidden" name="action" value="register"/>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label htmlFor="studentFirstName" className="block text-sm font-medium text-gray-700">Start Date</label>
                  <input type="date" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="studentFirstName" name="studentFirstName" required />
                </div>
                <div className="col-span-1">
                  <label htmlFor="studentLastName" className="block text-sm font-medium text-gray-700">End date</label>
                  <input type="date" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="studentLastName" name="studentLastName" required />
                </div>
          
              </div>

              <button type="submit" className="mt-4 px-4 py-3 bg-primary text-white rounded-lg hover:bg-white hover:text-primary border border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 items-center flex"><i className='mr-2'><Icon icon="dashicons:saved" /></i>Save</button>
            </form>
        </div>
          </div>
        )}
         {activeTab === 3 && (
          <div className="bg-white p-4 rounded-lg ">
          <div className="rounded-t  mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h4 className="text-lg font-bold text-primary">Add New department in your schedule: 2023-09-22 To 2023-09-22</h4>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form id="registrationForm" action="" method="POST">
              <input type="hidden" name="action" value="register"/>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label htmlFor="studentFirstName" className="block text-sm font-medium text-gray-700">Select Department</label>
                  <select className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="relationship" name="relationship" required>
                    <option>Undergraduate</option>
                    <option>Postgraduate</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="studentLastName" className="block text-sm font-medium text-gray-700">Select Unit/Services leave empty if not available </label>
                  <select className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="relationship" name="relationship" required>
                    <option>Undergraduate</option>
                    <option>Postgraduate</option>
                  </select>
                </div>
          
              </div>

              <button type="submit" className="mt-4 px-4 py-3 bg-primary text-white rounded-lg hover:bg-white hover:text-primary border border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 items-center flex"><i className='mr-2'><Icon icon="dashicons:saved" /></i>Save</button>
            </form>
        </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TabNavigation;
