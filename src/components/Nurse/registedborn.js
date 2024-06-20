import StudetAction from "../../Dropdowns/studentDropdowns";
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Registedborn() {
  const [NewBorns, setNewBorns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleRowClick = (NewBornId) => {
    console.log('Clicked user ID:', NewBornId);
    navigate(`/nurses/view/${NewBornId}`);
  };

  const fetchData = async (search = '') => {
    try {
      const authToken = localStorage.getItem('authToken');
      const url = search
        ? `https://nbhs136.onrender.com/DataCollection/API/newBorns/search?search=${search}`
        : 'https://nbhs136.onrender.com/DataCollection/API/newBorns/getAll';

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
      });
      const data = await response.json();

      if (response.ok) {
        setNewBorns(data.data || []);
        setErrorMessage('');
        if (!data.data || data.data.length === 0) {
          setErrorMessage('No matching newborns found.');
        }
      } else {
        console.error('No matching newborns found.:', data.message);
        setErrorMessage('No matching newborns found..');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setErrorMessage('Error fetching data.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    fetchData(searchValue);
  };

  return (
    <>
      <form className="flex flex-row flex-wrap items-center">
        <div className="relative flex w-full flex-wrap items-stretch">
          <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-600 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
            <Icon icon="line-md:search" />
          </span>
          <input
            type="text"
            placeholder="Search here..."
            className="mb-2 px-3 py-3 border border-gray-300 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm outline-none focus:outline-none focus:ring w-full pl-10"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </form>
      {errorMessage && (
        <div className="text-red-500 text-sm mb-2">{errorMessage}</div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-sky-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Child ID No
              </th>
              <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Father&apos;s Name
              </th>
              <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Mother&apos;s Name
              </th>
              <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {NewBorns.map((NewBorn) => (
              <tr key={NewBorn.id} className="hover:bg-gray-100" onClick={() => handleRowClick(NewBorn.id)}>
                <td className="px-6 py-4 whitespace-no-wrap">{NewBorn.generatedCode}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{NewBorn.fatherName}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{NewBorn.motherName}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{NewBorn.phoneContact}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <StudetAction userId={NewBorn.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
