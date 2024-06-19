import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function HealthCenter() {
  const [formData, setFormData] = useState({
    name: '',
    province: '',
    district: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [SuccessMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestData = {
      name: formData.name,
      province: formData.province,
      district: formData.district
    };
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      // Use the authToken in your API request
      fetch('https://nbhs136.onrender.com/DataCollection/API/healthcentre/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}` // Include the token in the Authorization header
        },
        body: JSON.stringify(requestData)
      })

      .then((response) => response.json())
      .then((data) => {
       
        console.log('Success:', data);
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setSuccessMessage(data.message || 'Health Center Registed!');
        setFormData({
          name: '',
          province: '',
          district: ''
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        setShowFailureMessage(true);
        setShowSuccessMessage(false);
        setErrorMessage('Network error. Please try again.');
      });
} else {
  // Handle case where authToken is not found in localStorage
  console.error('Auth token not found in localStorage');
  setShowFailureMessage(true);
  setShowSuccessMessage(false);
  setErrorMessage('Onlt Admin can Perform this task');
}
  }

  const closeSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  const closeFailureMessage = () => {
    setShowFailureMessage(false);
  };

    return (
      <>
      <div className="rounded-t  mb-0 px-6 py-6">

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
          <div className="text-center flex justify-between">
            <h4 className="text-lg font-bold text-primary">Regest new Health Center</h4>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form onSubmit={handleSubmit}>
      <input type="hidden" name="action" value="register" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            required
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Province</label>
          <input
            type="text"
            name="province"
            value={formData.province}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            required
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">District</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 px-4 py-3 bg-primary text-white rounded-lg hover:bg-white hover:text-primary border border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 items-center flex"
      >
        <i className='mr-2'><Icon icon="dashicons:saved" /></i>Save
      </button>
    </form>
        </div>
      </>
    )}