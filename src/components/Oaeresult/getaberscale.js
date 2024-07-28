import StudetAction from "../../Dropdowns/studentDropdowns";
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { useState,  useEffect, } from 'react';

export default function Registedborn() {
  const [NewBorns, setNewBorns] = useState([]);

  const navigate = useNavigate();

  const handleRowClick = (NewBornId) => {
    console.log('Clicked user ID:', NewBornId);
    navigate(`/audiologiste/abrscaleupdate/${NewBornId}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        
        const response = await fetch('https://hblab.rw/DataCollection/API/newBorns/getAllabrscale', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Include authorization token if required
            'Authorization': `Bearer ${authToken}` // Include the token in the Authorization header
          },
        });
        const data = await response.json();

        if (response.ok) {
          setNewBorns(data.data || []);
        } else {
          console.error('Failed to fetch data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
                className=" mb-2 px-3 py-3 border border-gray-300 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
     <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg">
        <thead className="bg-sky-100">
          <tr>
            <th className="px-6 py-3   text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Child ID No
            </th>
            <th className="px-6 py-3   text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Father&apos;s Name
            </th>
            <th className="px-6 py-3   text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Mother&apos;s Name
            </th>
            <th className="px-6 py-3   text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Contact
            </th>
            <th className="px-6 py-3   text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
             Action
            </th>
          </tr>
        </thead>
        <tbody className=" text-xs">
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