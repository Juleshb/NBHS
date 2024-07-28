import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserView = () => {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    pin: '',
    type: '',
    role: '',
    HealthCentre: ''
  });

  const [dataLoaded, setDataLoaded] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [SuccessMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetch(`https://hblab.rw/DataCollection/API/users/get/single/${userId}`)
      .then((response) => response.json())
      .then((responseData) => {
        const userData = responseData.data;

        setUserDetails({
          firstName: userData.firstName || '',
          lastName: userData.lastName || '',
          email: userData.email || '',
          pin: userData.pin || '',
          type: userData.type || '',
          role: userData.role || '',
          HealthCentre: userData.HealthCentre || ''
        });
        setDataLoaded(true);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value
    });
  };

  const handleSubmit = (action) => {
    if (action === 'update') {
      fetch(`https://hblab.rw/DataCollection/API/users/update/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update user details');
        }
        console.log('User details updated successfully');
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setSuccessMessage('User details updated successfully');
      })
      .catch((error) => {
        console.error('Error updating user details:', error);
        setShowFailureMessage(true);
        setShowSuccessMessage(false);
        setErrorMessage('Form submission error:', error);
      });
    } else if (action === 'delete') {
      fetch(`https://hblab.rw/DataCollection/API/users/delete/${userId}`, {
        method: 'DELETE'
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete user');
        }
        console.log('User deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
    }
  };

  const closeSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  const closeFailureMessage = () => {
    setShowFailureMessage(false);
  };

  return (
    <>
      <section className="relative mt-20 pt-20 block py-24 lg:pt-0 bg-blueGray-800" id="register">
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
    {/* Success message */}
    {showSuccessMessage && (
       <div className="border-dotted px-4 py-3 border-2 border-sky-500 text-sm text-primary bg-green-100 text-center flex justify-between" >
          <p className='items-center flex'><i className='mr-2'><Icon icon="dashicons:saved" /></i>{SuccessMessage}</p>
          <button onClick={closeSuccessMessage}><Icon icon="bytesize:close" /></button>
        </div>
      )}

      {/* Failure message */}
      {showFailureMessage && (
        <div className="border-dotted px-4 py-3 border-2 border-red-500 text-sm text-red-500 text-center flex justify-between" >
          <p className='items-center flex'><i className='mr-2'><Icon icon="bx:error-alt" /></i>{errorMessage}</p>
          <button onClick={closeFailureMessage}><Icon icon="bytesize:close" /></button>
        </div>
      )}

                    {dataLoaded ? (
                      <form onSubmit={(e) => e.preventDefault()}>
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
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                            <input type="text" name="role" id="role" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" required value={userDetails.role} onChange={handleChange} />
                          </div>
                        </div>
                        <div className='flex'>
                          <button type="button" onClick={() => handleSubmit('update')} className="mt-4 m-2 px-4 py-3 bg-primary text-white rounded-lg hover:bg-white hover:text-primary border border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 items-center flex">
                            <i className='mr-2'><Icon icon="dashicons:saved" /></i> Update 
                          </button>
                          <button type="button" onClick={() => handleSubmit('delete')} className="mt-4 m-2 px-4 py-3 bg-red-700 text-white rounded-lg hover:bg-white hover:text-red-700 border hover:border-red-700 focus:outline-none focus:ring focus:ring-red-700 focus:ring-opacity-50 items-center flex">
                            <i className='mr-2'><Icon icon="tdesign:delete" /></i> Delete 
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                          <div className="h-2 bg-slate-700 rounded"></div>
                          <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-700 rounded"></div>
                          </div>
                        </div>
                      </div>
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
