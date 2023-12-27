import StudetAction from "../../Dropdowns/studentDropdowns";
import { useState,  useEffect, } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const handleRowClick = (userId) => {
    console.log('Clicked user ID:', userId);
    navigate(`/users/view/${userId}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4600/DataCollection/API/users/getall');
        const data = await response.json();

        if (response.ok) {
          setUsers(data.data || []);
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
          <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            First Name
          </th>
          <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Last Name
          </th>
          <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Email
          </th>
          <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Role
          </th>
          <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Health Centre
          </th>
          <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="text-xs">
      {users.map((user) => (
  <tr key={user.id} className="hover:bg-gray-100" onClick={() => handleRowClick(user.id)}>
    <td className="px-6 py-4 whitespace-no-wrap">{user.firstName}</td>
    <td className="px-6 py-4 whitespace-no-wrap">{user.lastName}</td>
    <td className="px-6 py-4 whitespace-no-wrap">{user.email}</td>
    <td className="px-6 py-4 whitespace-no-wrap">{user.role}</td>
    <td className="px-6 py-4 whitespace-no-wrap">{user.HealthCentre}</td>
    <td className="px-6 py-4 whitespace-no-wrap">
      <StudetAction userId={user.id} />
    </td>
  </tr>
))}

      </tbody>
    </table>
      </div>
    </>
    );
}
export default UserTable;