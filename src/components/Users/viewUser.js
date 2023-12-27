import { Icon } from '@iconify/react';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const UserView = () => {
    const { userId } = useParams();
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    pin: ''
  });

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4600/DataCollection/API/users/get/single/${userId}`)
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Received user data:', responseData);
        
        const userData = responseData.data;

        setUserDetails({
            firstName: userData.firstName || '',
            lastName: userData.lastName || '',
            email: userData.email || '',
            pin: userData.pin || '' // Assuming pin exists in userData
          });
        setDataLoaded(true); // Set dataLoaded to true once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, [userId]);
  
  // Add a console log to check userDetails state
  useEffect(() => {
    console.log('userDetails:', userDetails);
  }, [userDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with data:', userDetails);
    // You can perform API call to update user details or any other necessary action
  };

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
            <h4 className="text-lg font-bold text-primary">User Detail:</h4>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        {dataLoaded ? (
        <form onSubmit={handleSubmit}>
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
        
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            required
            value={userDetails.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
          <input type="text" name="lastName" id="lastName" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" required value={userDetails.lastName} onChange={handleChange} />
        </div>
        <div className="col-span-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" id="email" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" required value={userDetails.email} onChange={handleChange} />
        </div>
        <div className="col-span-1">
          <label htmlFor="pin" className="block text-sm font-medium text-gray-700">PIN</label>
          <input type="password" name="pin" id="pin" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" required value={userDetails.pin} onChange={handleChange} />
        </div>
      </div>
      <button type="submit" className="mt-4 px-4 py-3 bg-primary text-white rounded-lg hover:bg-white hover:text-primary border border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 items-center flex">
        <i className='mr-2'><Icon icon="dashicons:saved" /></i> Save 
      </button>
    </form>
) : (
    <p><i><Icon icon="eos-icons:bubble-loading" /></i>Loading...</p>
  )}
     
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

export default UserView;