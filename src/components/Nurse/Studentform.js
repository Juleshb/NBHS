import { Icon } from '@iconify/react';
export default function Studentsform() {
    return (
      <>
 
        <div className="rounded-t  mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h4 className="text-lg font-bold text-primary">New Student Registration</h4>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form id="registrationForm" action="" method="POST">
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
                  <label htmlFor="studentDateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input type="date" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="studentDateOfBirth" name="studentDateOfBirth" required />
                </div>
                <div className="col-span-1">
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                  <select className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="gender" name="gender" required>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
             
                <div className="col-span-1">
                  <label htmlFor="guardianFirstName" className="block text-sm font-medium text-gray-700">University</label>
                  <input type="text" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="guardianFirstName" name="guardianFirstName" required />
                </div>
                <div className="col-span-1">
                  <label htmlFor="guardianLastName" className="block text-sm font-medium text-gray-700">Field</label>
                  <select className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="relationship" name="relationship" required>
                  <option>Nursing</option><option>General medecine</option><option>Dentist</option><option>Laboratory</option><option>Medical Imaging(Radiology,CT-Scan,Ultrasound,..)</option><option>Pharmacy</option><option>Ophthalmology</option><option>Physiotherapy</option><option>Human Nutrition</option><option>Anesthesia</option><option>Mental health department</option>
                  </select>
                 </div>
             
                <div className="col-span-1">
                  <label htmlFor="relationship" className="block text-sm font-medium text-gray-700">Classification</label>
                  <select className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="relationship" name="relationship" required>
                    <option>Undergraduate</option>
                    <option>Postgraduate</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="guardianContactEmail" className="block text-sm font-medium text-gray-700">Password</label>
                  <input type="password" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="guardianContactEmail" name="guardianContactEmail" required />
                </div>
                <div className="col-span-1">
                  <label htmlFor="guardianContactEmail" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <input type="password" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="guardianContactEmail" name="guardianContactEmail" required />
                </div>
                <div className="col-span-1">
                  <label htmlFor="guardianContactPhone" className="block text-sm font-medium text-gray-700">Phone number with country code ex: +250 789028283</label>
                  <input type="tel" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="guardianContactPhone" name="guardianContactPhone" required />
                </div>
              </div>

              <button type="submit" className="mt-4 px-4 py-3 bg-primary text-white rounded-lg hover:bg-white hover:text-primary border border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 items-center flex"><i className='mr-2'><Icon icon="dashicons:saved" /></i>Register</button>
            </form>
        </div>
     
      



    
    
  


</>
    );
}