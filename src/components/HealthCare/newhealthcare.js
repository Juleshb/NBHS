import { Icon } from '@iconify/react';
export default function Newborn() {
    return (
      <>
      <div className="rounded-t  mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h4 className="text-lg font-bold text-primary">Regest new Health Care</h4>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form id="registrationForm" action="" method="POST">
              <input type="hidden" name="action" value="register"/>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label htmlFor="mother's name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="mothername" name="mothername" required />
                </div>
                <div className="col-span-1">
                  <label htmlFor="father's name" className="block text-sm font-medium text-gray-700">Province</label>
                  <input type="text" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="fathername" name="fathername" required />
                </div>

                <div className="col-span-1">
                  <label htmlFor="father's name" className="block text-sm font-medium text-gray-700">District</label>
                  <input type="text" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="phoneconract" name="phone contact" required />
                </div>

               
               
                
                
                

          
              </div>

              <button type="submit" className="mt-4 px-4 py-3 bg-primary text-white rounded-lg hover:bg-white hover:text-primary border border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 items-center flex"><i className='mr-2'><Icon icon="dashicons:saved" /></i>Save</button>
            </form>
        </div>
      </>
    )}