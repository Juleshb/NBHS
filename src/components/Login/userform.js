import { Icon } from '@iconify/react';
export default function Userform() {
    return (
      <>
 <section className="relative mt-20 pt-40 block py-24 lg:pt-0 bg-blueGray-800" id="register">

 <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
                  <div className="flex-auto p-5 lg:p-10">
        <div className="rounded-t  mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h4 className="text-lg font-bold text-primary">Create Account</h4>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form id="registrationForm">
              <input type="hidden" name="action" value="register"/>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label htmlFor="studentFirstName" className="block text-sm font-medium text-gray-700">First name</label>
                  <input type="text" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="studentFirstName" name="studentFirstName" required />
                </div>
                <div className="col-span-1">
                  <label htmlFor="studentLastName" className="block text-sm font-medium text-gray-700">Last name</label>
                  <input type="text" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="studentLastName" name="studentLastName" required />
                </div>
                <div className="col-span-1">
                  <label htmlFor="studentFirstName" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="studentFirstName" name="studentFirstName" required />
                </div>
                <div className="col-span-1">
                  <label htmlFor="guardianContactEmail" className="block text-sm font-medium text-gray-700">PIN</label>
                  <input type="password" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="guardianContactEmail" name="password" required />
                </div>
                
              </div>

              <button type="submit" className="mt-4 px-4 py-3 bg-primary text-white rounded-lg hover:bg-white hover:text-primary border border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 items-center flex"><i className='mr-2'><Icon icon="dashicons:saved" /></i>Register</button>
            </form>
        </div>

        </div>
                </div>
              </div>
            </div>
          </div>
          </section>

</>
    );
}