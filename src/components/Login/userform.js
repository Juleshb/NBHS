import { Icon } from '@iconify/react';
import { useState } from 'react';

  const Userform= () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      pin: ''
    });
  
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('http://localhost:4600/DataCollection/API/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        const data = await response.json();
  
        if (response.ok) {
          setShowSuccessMessage(true);
          setShowFailureMessage(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            pin: ''
          });
        } else {
          setShowFailureMessage(true);
          setShowSuccessMessage(false);
          setErrorMessage(data.message || 'Failed to register');
        }
      } catch (error) {
        console.error('There was an error with the registration:', error);
        setShowFailureMessage(true);
        setShowSuccessMessage(false);
        setErrorMessage('Network error. Please try again.');
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
 <section className="relative mt-20 pt-40 block lg:pt-0 bg-blueGray-800" id="register">

 <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
                  <div className="flex-auto p-5 lg:p-10">
                    {/* Success message */}
     {showSuccessMessage && (
       <div className="border-dotted px-4 py-3 border-2 border-sky-500 text-sm text-primary bg-green-100 text-center flex justify-between" >
          <p className='items-center flex'><i className='mr-2'><Icon icon="dashicons:saved" /></i> Registration successful!</p>
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
        <div className="rounded-t  mb-0 px-4 py-6">
          <div className="text-center flex justify-between">
            <h4 className="text-lg font-bold text-primary">Create Account</h4>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
          <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleInputChange} className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" required />
        </div>
        <div className="col-span-1">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
          <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleInputChange} className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" required />
        </div>
        <div className="col-span-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" required />
        </div>
        <div className="col-span-1">
          <label htmlFor="pin" className="block text-sm font-medium text-gray-700">PIN</label>
          <input type="password" name="pin" id="pin" value={formData.pin} onChange={handleInputChange} className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" required />
        </div>
      </div>
      <button type="submit" className="mt-4 px-4 py-3 bg-primary text-white rounded-lg hover:bg-white hover:text-primary border border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 items-center flex">
      <i className='mr-2'><Icon icon="dashicons:saved" /></i> Register
      </button>
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
export default Userform;